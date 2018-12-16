import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Rank extends PureComponent {
  render() {
    const { author, contentCount, currentValue } = this.props;
    return (
      <li>
        <p className="rank">
          <b>{author}</b>
        </p>
        <p>擁有 {contentCount} 個段落</p>
      </li>
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
