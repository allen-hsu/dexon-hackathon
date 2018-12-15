import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BookWrapper } from "./style";
import Page from "./component/Page";
import { actionCreators } from "./store";
import { from } from "rxjs";
class Book extends PureComponent {
  render() {
    const { web3States, updateStorageValue, storageValue } = this.props;
    if (web3States) {
      return (
        <BookWrapper onClick={() => updateStorageValue(1)}>
          這是一個測試{storageValue}
          <Page />
        </BookWrapper>
      );
    } else {
      return <div>沒有Web3 loding</div>;
    }
  }

  componentDidMount() {
    this.props.authWeb3();
  }
}

const mapStateToProps = state => ({
  web3States: state.getIn(["book", "web3"]),
  storageValue: state.getIn(["book", "storageValue"])
});

const mapDispathToProps = (dispatch, ownProps) => ({
  authWeb3() {
    dispatch(actionCreators.authWeb3Action());
  },

  updateStorageValue(value) {
    dispatch(actionCreators.setStorageValue(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
