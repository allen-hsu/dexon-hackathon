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
          
          <div id="popup_book" className="popup_book" >
            <div className="editor">
                {/* <div className="box" contentEditable="true"> */}
                <textarea className="box">{content}</textarea>
                <div className="left">
                    當前價格: {currentValue} dex <br/>
                    作者: {author} <br/>
                    最後編輯時間: 2018/12/12 23:08 <br/>
                </div>
                <div className="right">
                    <div id="b_buy" className="btn btn_edit btn_buy">Buy</div>
                    <div id="b_ok" className="btn btn_edit">Buy</div>
                    <div id="b_cancel" className="btn btn_edit ">Cancel</div>
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
