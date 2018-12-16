import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BookWrapper,
  BookLeft,
  BookCenter,
  BookRight,
  ArticleListWrapper
} from "./style";
import Page from "./component/Page";
import ArticleList from "./component/ArticleList";
import RankList from "./component/RankList";
import { actionCreators } from "./store";
import { from } from "rxjs";

class Book extends PureComponent {
  constructor(props) {
    super(props);
    this.init = false;
  }
  render() {
    const { web3States, rewardPool } = this.props;
    if (web3States) {
      return (
        <BookWrapper>
           <div className="top_info">
          <h1>Once Upon a Time...</h1>
          <div class="info">總價值：163,423.5642 DEX   •   已創作文字：2736238   •   獎池：22,271.8587 DEX   •   進行中</div>    
        </div>  
          <div>目前獎金{rewardPool}</div>
          <BookLeft>
            <div>排行榜</div>
            <RankList />
          </BookLeft>
          <BookCenter>
            <div>中間</div>
            <div>
              <ArticleList />
            </div>
          </BookCenter>
          <BookRight>
            <div>右邊</div>
          </BookRight>
        </BookWrapper>
      );
    } else {
      return <div>沒有Web3 loding</div>;
    }
  }
  componentDidUpdate() {
    const { web3States, getCurrentReward, getStoryPart } = this.props;
    if (!this.init) {
      if (web3States) {
        console.log("初始化成功");
        getStoryPart(0, 10);
        getCurrentReward();
      } else {
        console.log("初始化失敗");
      }
      this.init = true;
    }
  }

  componentDidMount() {
    this.props.authWeb3();
  }
}

const mapStateToProps = state => ({
  web3States: state.getIn(["book", "web3"]),
  storageValue: state.getIn(["book", "storageValue"]),
  rewardPool: state.getIn(["book", "rewardPool"]),
  parts: state.getIn(["book", "parts"])
});

const mapDispathToProps = (dispatch, ownProps) => ({
  authWeb3() {
    dispatch(actionCreators.authWeb3Action());
  },

  updateStorageValue(value) {
    dispatch(actionCreators.setStorageValue(value));
  },

  getCurrentReward() {
    dispatch(actionCreators.getCurrentReward());
  },

  getStoryPart(start, count) {
    dispatch(actionCreators.getStoryPart(start, count));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
