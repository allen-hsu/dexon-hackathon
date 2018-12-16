import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Rank extends PureComponent {
  render() {
    const { author, contentCount, currentValue } = this.props;
    return (
      <div>
        <div>作者: {author}</div>
        <div>文字數量: {contentCount}</div>
        <div>Dex: {currentValue}</div>
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
)(Rank);
