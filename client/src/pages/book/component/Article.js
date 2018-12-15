import React, { PureComponent } from "react";
import { BookWrapper, PageItem, PageWrapper, PageScene, PageBook, PageBox, ItemFront, ItemBack } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";


class Article extends PureComponent {
    render() {
        return (
            <div>This Article</div>
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
  )(Article);
  