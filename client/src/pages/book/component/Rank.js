import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Rank extends PureComponent {
  render() {
    const { author, contentCount, currentValue } = this.props;
    return (
      <li>
        <p><b>2. {author}</b></p>
        <p>888888 個字</p>
        <p>3,124.4850 Dex</p>
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
