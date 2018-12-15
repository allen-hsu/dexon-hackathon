import React, { PureComponent } from "react";
import { PageItem, PageWrapper, PageScene, PageBook } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class Page extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <PageScene>
          <PageBook>
            <PageItem />
            <PageItem />
            <PageItem />
          </PageBook>
        </PageScene>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
