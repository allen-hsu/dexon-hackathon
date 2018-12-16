import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Article from "./Article";

class ArticleList extends PureComponent {
  render() {
    const { parts } = this.props;
    console.log(parts);
    return (
      <div>
        {parts.map((item, index) => {
          return (
            <div key={item.id}>
              <Article
                id={item.id}
                author={item.author}
                content={item.content}
                nextValue={item.nextValue}
                currentValue={item.currentValue}
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
