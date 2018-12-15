import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import getWeb3 from "../../utils/getWeb3";
class Auth extends PureComponent {
  render() {
    const { web3States } = this.props;
    if (!web3States) {
      return <div>有Web3</div>;
    } else {
      return <div>沒有Web3 loding</div>;
    }
  }

  componentDidMount() {
    this.props.authWeb3(getWeb3());
  }
}

const mapStateToProps = state => ({
  web3States: state.getIn(["auth", "web3"])
});

const mapDispathToProps = dispatch => ({
  authWeb3(web3) {
    dispatch(actionCreators.authWeb3Action(web3));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Auth));
