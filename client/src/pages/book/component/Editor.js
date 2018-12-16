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
          
          <div className="popup_book" >
            <div className="editor">
                {/* <div className="box" contentEditable="true"> */}
                <textarea className="box">{content}</textarea>
                <div className="left">
                    <p><span className="tt">當前價格</span> {currentValue} dex </p>
                    <p><span className="tt">購買價錢</span> {nextValue} dex</p>
                    <p className="author tt"><span className="tt">作者</span> {author}</p>
                    
                </div>
                <div className="right">
                    <div onClick={() => buyStoryPart(this.props)} className="btn btn_edit btn_buy">Buy</div>
                    <div onClick={() => updateEditor()} className="btn btn_edit">Ok</div>
                    <div onClick={() => closeEditor()} className="btn btn_edit ">Cancel</div>
                </div>
            </div>
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
