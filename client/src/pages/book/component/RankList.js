import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Rank from "./Rank";

class RankList extends PureComponent {
  render() {
    const { parts } = this.props;
    return (
      <div>
        {parts.map((item, index) => {
          return (
            <div key={item.get("id")}>
              <Rank
                author={"排行榜作者"}
                contentCount={"寫入內容"}
                currentValue={"數值"}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.getIn(["book", "parts"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankList);
