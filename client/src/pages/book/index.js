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
            <div className="info">總價值：163,423.5642 DEX   •   已創作文字：2736238   •   獎池： {rewardPool} DEX   •   進行中</div>    
          </div>

          {/* 跳出編輯器 */}
          <div id="popup_book" className="popup_book" >
            <div className="editor">
                {/* <div className="box" contentEditable="true"> */}
                <textarea className="box">
                    
                </textarea>
                <div className="left">
                    當前價格: 9.533 dex <br/>
                    作者: God's right hand <br/>
                    最後編輯時間: 2018/12/12 23:08 <br/>
                </div>
                <div className="right">
                    <div id="b_buy" className="btn btn_edit btn_buy">Buy</div>
                    <div id="b_ok" className="btn btn_edit">Ok</div>
                    <div id="b_cancel" className="btn btn_edit ">Cancel</div>
                </div>
            </div>
        </div>

          {/* 書本 */}
          <PageWrapper>
            <div className="btn click_prev"></div>
            <div className="btn click_next"></div>
            <div className="one_page left">           
              <article className="single_article">
                    <div className="content">
                        <p>第一筆：「為了讓人類有成功的生活，神提供了兩種管道：教育與運動」。而實際上這兩種管道是相輔相成，缺一不可。在幼兒的成長，健康是最重要的，也是最好的投資，運動就是健康的最佳選擇。迷你足球不只是運動，也是教育。研究發現，當一個人大量運動時會分泌多巴胺、血清素和正腎上腺素，這三種神經傳導物質都跟情緒與學習有關。多巴胺是種正向的情緒物質，人要快樂，大腦中一定要有多巴胺，這就是我們看到運動完的人心情都是。</p>
                        <div className="info">
                            <div className="left">
                                <p>當前價格：9.533 dex </p>
                                <p>作者：God's right hand</p>
                                <p>最後編輯時間：2018/12/12 23:08</p>
                            </div>
                            <div className="right">
                                <div className="btn btn_edit">Edit</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="single_article">
                    <div className="content">
                        <p>第一筆：「為了讓人類有成功的生活，神提供了兩種管道：教育與運動」。而實際上這兩種管道是相輔相成，缺一不可。在幼兒的成長，健康是最重要的，也是最好的投資，運動就是健康的最佳選擇。迷你足球不只是運動，也是教育。研究發現，當一個人大量運動時會分泌多巴胺、血清素和正腎上腺素，這三種神經傳導物質都跟情緒與學習有關。多巴胺是種正向的情緒物質，人要快樂，大腦中一定要有多巴胺，這就是我們看到運動完的人心情都是。</p>
                        <div className="info">
                            <div className="left">
                                <p>當前價格：9.533 dex </p>
                                <p>作者：God's right hand</p>
                                <p>最後編輯時間：2018/12/12 23:08</p>
                            </div>
                            <div className="right">
                                <div className="btn btn_edit">Edit</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="one_page right">           
              <article className="single_article">
                    <div className="content">
                        <p>第一筆：「為了讓人類有成功的生活，神提供了兩種管道：教育與運動」。而實際上這兩種管道是相輔相成，缺一不可。在幼兒的成長，健康是最重要的，也是最好的投資，運動就是健康的最佳選擇。迷你足球不只是運動，也是教育。研究發現，當一個人大量運動時會分泌多巴胺、血清素和正腎上腺素，這三種神經傳導物質都跟情緒與學習有關。多巴胺是種正向的情緒物質，人要快樂，大腦中一定要有多巴胺，這就是我們看到運動完的人心情都是。</p>
                        <div className="info">
                            <div className="left">
                                <p>當前價格：9.533 dex </p>
                                <p>作者：God's right hand</p>
                                <p>最後編輯時間：2018/12/12 23:08</p>
                            </div>
                            <div className="right">
                                <div className="btn btn_edit">Edit</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="single_article">
                    <div className="content">
                        <p>第一筆：「為了讓人類有成功的生活，神提供了兩種管道：教育與運動」。而實際上這兩種管道是相輔相成，缺一不可。在幼兒的成長，健康是最重要的，也是最好的投資，運動就是健康的最佳選擇。迷你足球不只是運動，也是教育。研究發現，當一個人大量運動時會分泌多巴胺、血清素和正腎上腺素，這三種神經傳導物質都跟情緒與學習有關。多巴胺是種正向的情緒物質，人要快樂，大腦中一定要有多巴胺，這就是我們看到運動完的人心情都是。</p>
                        <div className="info">
                            <div className="left">
                                <p>當前價格：9.533 dex </p>
                                <p>作者：God's right hand</p>
                                <p>最後編輯時間：2018/12/12 23:08</p>
                            </div>
                            <div className="right">
                                <div className="btn btn_edit">Edit</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
          </PageWrapper>

          <div>目前獎金{rewardPool}</div>
          <BookLeft>
            <div className="leader_board">
              <h2>排行榜 <i className="fa fa-angle-down" aria-hidden="true"></i></h2>
              <div>
                  <div className="img_box">
                    <img src={img_ico_wincup} alt="" />
                    <div className="top_rate">
                        <b>1. Xiakecat</b> <br/>
                        34,137 個字 <br/>
                        3,124.4850 Dex
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
          {toggleEditor ? <Edit /> : null}
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
  parts: state.getIn(["book", "parts"]),
  toggleEditor: state.getIn(["book", "toggleEditor"]),
  currentEditorId: state.getIn(["book", "currentEditorId"])
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
