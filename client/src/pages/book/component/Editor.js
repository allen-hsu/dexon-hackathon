import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { EditorWrapper, EditorContainer } from "../style";

class Editor extends PureComponent {
  render() {
    const {
      id,
      author,
      content,
      currentValue,
      nextValue,
      currentEditorId,
      updateEditor,
      closeEditor,
      buyStoryPart,
      parts
    } = this.props;

    console.log(parts);
    return (
      <EditorWrapper>
        <EditorContainer>
          <div>
            <div>作者: {author}</div>
            <div>內容: {content}</div>
            <div>目前價值: {currentValue}</div>
            <div>購買價錢: {nextValue}</div>
            <button onClick={() => closeEditor()}>取消</button>
            <button onClick={() => updateEditor()}>確認</button>
            <button onClick={() => buyStoryPart(this.props)}>購買</button>
          </div>
        </EditorContainer>
      </EditorWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentEditorId: state.getIn(["book", "currentEditorId"]),
    parts: state.getIn(["book", "parts"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeEditor() {
    dispatch(actionCreators.toggleEditor(0, false));
  },

  updateEditor() {
    dispatch(actionCreators.updateEditor(ownProps.currentEditorId, "測試"));
  },

  buyStoryPart(props) {
    console.log("買了故事");
    console.log(props.currentEditorId);
    const partInfo = props.parts[props.currentEditorId];
    dispatch(
      actionCreators.buyStoryPart(
        partInfo.id,
        0,
        0,
        "買了故事",
        partInfo.nextValue
      )
    );
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
