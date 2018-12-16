import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Rank from "./Rank";

class RankList extends PureComponent {
  render() {
    const { leaderboard } = this.props;
    console.log("排行榜資訊" + leaderboard);
    return (
      <div className="list_rate">
        <ul>
          {leaderboard.map((item, index) => {
            return (
              <Rank
                key={item.address}
                author={item.address}
                contentCount={item.wordCount}
                currentValue={"數值"}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    leaderboard: state.getIn(["book", "leaderboard"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankList);
