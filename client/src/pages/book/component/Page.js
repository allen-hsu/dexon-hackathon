import React, { PureComponent } from "react";
import { PageItem, PageWrapper, PageScene, PageBook, PageBox } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import testImg from "../../../statics/images/page_back1.png";
class Page extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <PageScene>
          <PageBook>
            <PageItem className="setbig big">
              <PageBox>
                <img alt="" src={testImg} />
              </PageBox>
            </PageItem>
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
