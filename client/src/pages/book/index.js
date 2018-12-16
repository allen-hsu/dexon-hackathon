import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BookWrapper,
  BookLeft,
  BookCenter,
  BookRight,
  PageWrapper,
  ArticleListWrapper
} from "./style";
import Page from "./component/Page";
import ArticleList from "./component/ArticleList";
import RankList from "./component/RankList";
import Edit from "./component/Editor";
import { actionCreators } from "./store";
import { from } from "rxjs";

import img_ico_wincup from "../../statics/images/ico_wincup.png";
import { getStoryCount } from "./store/actionCreators";

class Book extends PureComponent {
  constructor(props) {
    super(props);
    this.init = false;
    this.update = false;
  }
  render() {
    const { web3States, rewardPool } = this.props;
    if (web3States) {
      return (
        <BookWrapper>
          <div className="top_info">
            <h1>Once Upon a Time...</h1>
            <div className="info">
              總價值：163,423.5642 DEX • 已創作文字：2736238 • 獎池：{" "}
              {rewardPool / 1000000000000000000} DEX • 進行中
            </div>
          </div>

          {/* 書本 */}
          <PageWrapper>
            <div
              onClick={() => this.getPrevPageInfo()}
              className="btn click_prev"
            />
            <div
              onClick={() => this.getNextPageInfo()}
              className="btn click_next"
            />
            <div className="one_page ">
              <ArticleList />
            </div>
          </PageWrapper>

          <div>目前獎金{rewardPool}</div>
          <BookLeft>
            <div className="leader_board">
              <h2>
                排行榜 <i className="fa fa-angle-down" aria-hidden="true" />
              </h2>
              <div>
                <div className="img_box">
                  <img src={img_ico_wincup} alt="" />
                  <div className="top_rate">
                    <b>No.1 Xiakecat</b> <br />
                    擁有 88 個段落
                    <br />
                  </div>
                </div>
                <RankList />
              </div>
            </div>
            <div className="help_board">
              <h2>幫助 </h2>
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
      return (
        <BookWrapper>
          <div className="wait">等待錢包區塊鏈中...</div>
        </BookWrapper>
      );
    }
  }

  getNextPageInfo() {
    const { getStoryPart, currentPageIndex, totalPartCount } = this.props;
    const nextIndex = currentPageIndex + 4;

    if (nextIndex >= totalPartCount) {
      console.log("超出範圍啦~~");
      return;
    }
    console.log("更新下個頁面 : " + nextIndex);
    getStoryPart(nextIndex, 4);
  }

  getPrevPageInfo() {
    const { getStoryPart, currentPageIndex, totalPartCount } = this.props;

    const nextIndex = currentPageIndex - 4;
    if (nextIndex < 0) {
      console.log("超出範圍啦~~");
      return;
    }
    getStoryPart(nextIndex, 4);
  }

  getEditorInfo() {
    const { toggleEditor, parts, currentEditorId } = this.props;
    const currentEditorPart = parts[currentEditorId];
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
      closeUpdateInfo,
      currentPageIndex,
      getStoryCount
    } = this.props;
    if (!this.init) {
      if (web3States) {
        console.log("初始化成功");
        getStoryPart(currentPageIndex, 4);
        getCurrentReward();
        getStoryCount();
        getRank();
      } else {
        console.log("初始化失敗");
      }
      this.init = true;
    }

    if (updateAllInfo) {
      console.log("更新摟~~");
      closeUpdateInfo();
      // getStoryPart(currentPageIndex, 4);
      // getCurrentReward();
      // getRank();
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
  updateAllInfo: state.getIn(["book", "updateAllInfo"]),
  currentPageIndex: state.getIn(["book", "pagePartStart"]),
  totalPartCount: state.getIn(["book", "totalPartCount"])
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
  },
  getStoryCount() {
    dispatch(actionCreators.getStoryCount());
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
