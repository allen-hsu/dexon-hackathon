import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Rank from "./Rank";

class RankList extends PureComponent {
  render() {
    const { parts } = this.props;
    console.log(parts);
    return (
      <div className="list_rate">
        <ul>
          {parts.map((item, index) => {
            return (
              <Rank
                key={item.id}
                author={"排行榜作者"}
                contentCount={"寫入內容"}
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
    parts: state.getIn(["book", "parts"])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankList);
