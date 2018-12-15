import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Article extends PureComponent {
  render() {
    const { author, content, currentValue } = this.props;
    return (
      <div>
        <div>作者: {author}</div>
        <div>內容: {content}</div>
        <div>目前價值: {currentValue}</div>
        <button>購買</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
