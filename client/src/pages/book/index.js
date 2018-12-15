import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BookWrapper, PageItem } from "./style";
import Page from "./component/Page";
import { actionCreators } from "./store";
import { from } from "rxjs";
class Book extends PureComponent {
  render() {
    return (
      <BookWrapper>
        這是一個測試
        <Page>
          <PageItem />
          <PageItem />
          <PageItem />
          <PageItem />
        </Page>
      </BookWrapper>

      // <DetailWrapper>
      //   <Header>{this.props.title}</Header>
      //   <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      // </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispathToProps = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(Book));
