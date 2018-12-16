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
import Edit from "./component/Editor";
import { actionCreators } from "./store";
import { from } from "rxjs";

import img_ico_wincup from "../../statics/images/ico_wincup.png";
import { getRank } from "./store/actionCreators";

class Book extends PureComponent {
  constructor(props) {
    super(props);
    this.init = false;
  }
  render() {
    const { web3States, rewardPool, toggleEditor } = this.props;
    if (web3States) {
      return (
        <BookWrapper>
          <div className="top_info">
            <h1>Once Upon a Time...</h1>
            <div class="info">
              總價值：163,423.5642 DEX • 已創作文字：2736238 • 獎池：
              {rewardPool}
              DEX • 進行中
            </div>
          </div>
          <div>目前獎金{rewardPool}</div>
          <BookLeft>
            <div className="leader_board">
              <h2>
                <b>排行榜</b>{" "}
                <i className="fa fa-angle-down" aria-hidden="true" />
              </h2>
              <div>
                <div className="img_box">
                  <img src={img_ico_wincup} alt="" />
                  <div className="top_rate">
                    <b>1. Xiakecat</b> <br />
                    34,137 個字 <br />
                    3,124.4850 Dex
                  </div>
                </div>
                <RankList />
              </div>
            </div>
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
          {this.getEditorInfo()}
        </BookWrapper>
      );
    } else {
      return <div>沒有Web3 loding</div>;
    }
  }

  getEditorInfo() {
    const { toggleEditor, parts, currentEditorId } = this.props;
    const currentEditorPart = parts[currentEditorId];
    console.log(currentEditorId);
    console.log(currentEditorPart);
    if (toggleEditor) {
      return (
        <Edit
          author={currentEditorPart.author}
          content={currentEditorPart.content}
          currentValue={currentEditorPart.currentValue}
          nextValue={currentEditorPart.nextValue}
        />
      );
    } else {
      return null;
    }
  }
  componentDidUpdate() {
    const {
      web3States,
      getCurrentReward,
      getStoryPart,
      updateAllInfo,
      getRank,
      closeUpdateInfo
    } = this.props;
    if (!this.init) {
      if (web3States) {
        console.log("初始化成功");
        getStoryPart(0, 10);
        getCurrentReward();
        getRank();
      } else {
        console.log("初始化失敗");
      }
      this.init = true;
    }

    if (updateAllInfo) {
      console.log("更新摟~~");
      closeUpdateInfo();
      getStoryPart(0, 10);
      getCurrentReward();
      getRank();
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
  parts: state.getIn(["book", "parts"]),
  toggleEditor: state.getIn(["book", "toggleEditor"]),
  currentEditorId: state.getIn(["book", "currentEditorId"]),
  updateAllInfo: state.getIn(["book", "updateAllInfo"])
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
  },

  getRank() {
    dispatch(actionCreators.getRank());
  },

  closeUpdateInfo() {
    dispatch(actionCreators.closeUpdateInfo());
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
