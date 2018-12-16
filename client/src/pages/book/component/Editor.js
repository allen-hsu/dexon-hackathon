import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { EditorWrapper, EditorContainer } from "../style";

class Editor extends PureComponent {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.init = false;
  }
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
      parts,
      inputValue
    } = this.props;

    console.log(content);
    // if (!this.init) {
    //   this.editText = content;
    //   this.init = true;
    // }
    return (
      <EditorWrapper>
        <EditorContainer>
          <div className="popup_book">
            <div className="editor">
              <textarea
                value={this.editText}
                onChange={this.onHandleChange}
                className="box"
              />
              <div className="left">
                <p>
                  <span className="tt">當前價格</span>{" "}
                  {currentValue / 1000000000000000000} dex{" "}
                </p>
                <p>
                  <span className="tt">購買價錢</span>{" "}
                  {nextValue / 1000000000000000000} dex
                </p>
                <p className="author tt">
                  <span className="tt">作者</span> {author}
                </p>
              </div>
              <div className="right">
                <div
                  onClick={() => buyStoryPart(this.props, this.editText)}
                  className="btn btn_edit btn_buy"
                >
                  Buy
                </div>
                <div onClick={() => updateEditor()} className="btn btn_edit">
                  Ok
                </div>
                <div onClick={() => closeEditor()} className="btn btn_edit ">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </EditorContainer>
      </EditorWrapper>
    );
  }

  componentDidMount() {}

  onHandleChange(event) {
    // console.log(event.target.value);
    this.editText = event.target.value;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentEditorId: state.getIn(["book", "currentEditorId"]),
    parts: state.getIn(["book", "parts"]),
    inputValue: state.getIn(["book", "inputValue"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeEditor() {
    dispatch(actionCreators.toggleEditor(0, false));
  },

  updateEditor() {
    dispatch(actionCreators.updateEditor(ownProps.currentEditorId, "測試"));
  },

  buyStoryPart(props, editText) {
    console.log(props.currentEditorId);
    const partInfo = props.parts[props.currentEditorId];
    dispatch(
      actionCreators.buyStoryPart(
        partInfo.id,
        0,
        0,
        editText,
        partInfo.nextValue
      )
    );
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
