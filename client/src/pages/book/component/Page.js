import React, { PureComponent } from "react";
import { BookWrapper, PageItem, PageWrapper, PageScene, PageBook, PageBox, ItemFront, ItemBack } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import Article from "./Article"
import page_bg from "../../../statics/images/page_bg.png";
import page_cover from "../../../statics/images/page_cover.png";
import page_cover1 from "../../../statics/images/page_cover1.png";
import page_back from "../../../statics/images/page_back.png";
import page_back1 from "../../../statics/images/page_back1.png";
import page_left from "../../../statics/images/page_left.png";
import page_right from "../../../statics/images/page_right.png";




class Page extends PureComponent {
  state = { isCover: false}
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isCover: true
    }));
  } 

 

  render() {
    return (
      <BookWrapper> 
      
        <PageWrapper>
          <PageScene>
            <PageBook>
              <PageItem className={this.state.isCover ? "setbig big flipped": "setbig big"}>
                <ItemFront>
                  <PageBox onClick={this.handleClick}>
                  <Article></Article>
                      <img alt="" src={page_cover} />
                      
                  </PageBox>
                </ItemFront>
                <ItemBack>
                  <PageBox>
                      <img alt="" src={page_cover1} />
                  </PageBox>
                </ItemBack>
              </PageItem>
              {/* <PageItem className={this.state.isCover ? "setbig big flipped": "setbig big"}>
                <ItemFront>
                  <PageBox onClick={this.handleClick}>
                      <img alt="" src={page_back1} />
                  </PageBox>
                </ItemFront>
                <ItemBack>
                  <PageBox>
                      <img alt="" src={page_left} />
                  </PageBox>
                </ItemBack>
              </PageItem> */}
              
            </PageBook>
          </PageScene>
        </PageWrapper>
      </BookWrapper>
    );
  }
  componentDidMount() {
    this.props.getLastValue();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getLastValue() {
    dispatch(actionCreators.getLastValue(1));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
