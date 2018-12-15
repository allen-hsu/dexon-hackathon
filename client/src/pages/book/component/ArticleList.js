import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Article from "./Article";

class ArticleList extends PureComponent {
  render() {
    const { parts } = this.props;
    return (
      <div>
        {parts.map((item, index) => {
          return (
            <div key={item.get("id")}>
              <Article
                author={item.get("author")}
                content={item.get("content")}
                currentValue={item.get("currentValue")}
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
)(ArticleList);
