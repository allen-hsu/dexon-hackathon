import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Article extends PureComponent {
  render() {
    const { id, author, content, currentValue, toggleEditor } = this.props;
    return (
      <div>
        <div>作者: {author}</div>
        <div>內容: {content}</div>
        <div>目前價值: {currentValue}</div>
        <button onClick={() => toggleEditor(id, true)}>購買</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleEditor(id, value) {
    console.log("打開編輯器, 故事id : " + id);
    dispatch(actionCreators.toggleEditor(id, value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
