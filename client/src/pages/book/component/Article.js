import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Article extends PureComponent {
  render() {
    const { id, author, content, currentValue, toggleEditor } = this.props;
    return (
      
        <article className="single_article">
            <div className="content">
                <p>{content}</p>
                <div className="info">
                    <div className="left">
                        <p>當前價格：{currentValue} </p>
                        <p className="author">作者：{author}</p>
                    </div>
                    <div className="right">
                        <button className="btn btn_edit" onClick={() => toggleEditor(id, true)}>Edit</button>
                    </div>
                </div>
            </div>
        </article>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleEditor(id, value) {
    console.log("打開編輯器, 故事id : " + id);
    dispatch(actionCreators.toggleEditor(id, value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
