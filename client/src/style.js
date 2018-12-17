import { createGlobalStyle } from "styled-components";

import img_btn_rightleft from "./statics/images/btn_rightleft.png";
import img_btn_edit from "./statics/images/btn_edit.png";
import img_btn_buy from "./statics/images/btn_buy.png";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body {
    background-image: url(../images/bg.jpg);
    background-size: cover;
}
p {
  margin: 0;
}

img {
  max-width: 100%;
}

b {
  font-weight:800;
}

.top_info {
  color: #fff;
  text-align: center;
  font-weight: 300;
  h1 {
      font-weight: 300;
      font-size: 30px;
      margin:20px 0;
  }
}
.help_board {
  position: fixed;
  top: 70px;
  right: 0;
  width: 13vw;
  min-width: 200px;
  background-color: #270b45;
  text-align: center;
  color: #fff;
  z-index: 100;
  font-weight: 300;
  h2 {
      font-weight: 300;
      cursor: pointer;
      margin: 10px 0;
      font-size:24px;
  }
}
.leader_board {
  position: fixed;
  top: 70px;
  left: 0;
  width: 13vw;
  min-width: 200px;
//    height: calc( 100% - 70px);
  background-color: #270b45;
  text-align: center;
  color: #fff;
  z-index: 100;
  font-weight: 300;
  h2 {
      font-weight: 300;
      cursor: pointer;
      margin: 10px 0;
      font-size:24px;
  }
  i.flipy {
      -moz-transform:scaleY(-1);
      -webkit-transform:scaleY(-1);
      -o-transform:scaleY(-1);
      transform:scaleY(-1);
  }
  .img_box {
      background-color: #2e0f4d;
      
      .top_rate {
          line-height: 1.7;
          padding-bottom: 15px;
      }
  }
  .list_rate {
      overflow: auto;
      height: calc( 100vh - 340px);
      ul {
          padding: 0;
          margin: 0;
      }
      li {
          padding: 10px 0;
          list-style: none;
          p {
            line-height:1.3;
            &.rank {
              margin: 0 10px;
              overflow:hidden;
              white-space: pre;
        text-overflow : ellipsis;
            }
          }
          
      }
      
  }
}

.wait {
  margin: 100px auto;
  color:#fff;
  font-size: 40px;
  text-align:center;
  font-weight: 300;
}

.btn {
  &.click_prev,
  &.click_next {
      display: block;
      position: absolute;
      bottom: 50px;
      width: 112px;
      height: 112px;
      background-image: url(${img_btn_rightleft});
      cursor: pointer;
  }
  &.click_prev {
      background-position: left top;
      right: -6vw;
      bottom:180px;
      &:hover {
          background-position: left bottom;
      }
  }
  &.click_next {
      background-position: right top;
      right: -6vw;
      &:hover {
          background-position: right bottom;
      }
  }
  
}

.btn_edit {
  position: relative;
  background-image: url(${img_btn_edit});
  width: 124px;
  height: 56px;
  background-position: left top;
  overflow: hidden;
  margin-top: 10px;
  line-height: 56px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  background-color:rgba(0,0,0,0);
  border:0;
  max-width:100%;
  padding-top:42%;
  height:0;
  background-size:100%;
  &:after {
    content: "Edit";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 1.8;
  }
  &:hover {
      background-position: left bottom;
  }
}

.btn_ok {
    &:after {
        content: "Ok";
    }
}
.btn_cancel {
    &:after {
        content: "Cancel";
    }
}
.btn_buy {
  background-size: 100%;
  background-image: url(${img_btn_buy});
  &:hover {
      background-position: left bottom;
  }
  &:after {
    content: "Buy";
  }
}

.popup_book {
  display: none;
  background-color: rgba(0,0,0,.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content:center;
  align-items:center;
  .editor {
      background-color: rgba(233,218,184,.9);
      width: calc( 70vw - 100px );
      max-width: 700px;
      height: calc( 80vh - 50px );;
      max-height: 400px;
      padding: 25px 50px;
      .author {
        white-space: pre;
        text-overflow : ellipsis;
        overflow: hidden;
      }
      p {
        line-height: 1.4;
        font-weight:400;
        .tt{
          color: #753f1c;
        }
      }
      .box {
          font-size: 20px;
          line-height: 1.7;
          background-color: rgba(255,255,255,.5);
          width: calc(100% - 30px) ;
          height: 270px;
          margin-bottom: 15px;
          padding: 15px;
      }
  }
  .left {
      float: left;
      width: 43%;
  }
  .right {
      float: right;
      display:flex;
      width:52%;
      .btn_edit {
        
          margin: 0 3px;
          padding-top:14%;
      }
  }
}

.book_area {
  position: relative;
  margin: 30px auto 0;
  width: 77vw;
  height: 48vw;
  max-width: 1320px;
  background-size: contain;
  background-color: red;
}

.one_page {
  width: calc( 100% - 100px );
    margin: 0 auto;
    .single_article {
        width: calc( 50% - 3vw);
        padding: 3vw 1.5vw 0;
        font-size: 17px;
        line-height: 1.6;
        float: left;

  .content {
      position: relative;
      padding: 5px 10px;
      border: 2px solid rgba(0, 0, 0, 0);
      transition: all .5s;
      height: 16.5vw;
      max-height:240px;
      overflow:hidden;

      &.load {
          position: static;
      }

      &:hover {
          border: 2px solid #582b74;

          .info {
              opacity: 1;
          }
      }

      .info {
          opacity: 0;
          position: absolute;
          bottom: 0;
          right: 0;
          width: calc(100% - 20px);
          height: 70px;
          transition: all .5s;
          background-color: rgba(78, 29, 109, .8);
          color: #fff;
          font-size: 15px;
          padding: 3px 10px;

          .author {
            white-space: pre;
            text-overflow : ellipsis;
            overflow: hidden;
          }

          .left {
              width: 70%;
              float: left;
              margin-top:10px;
          }

          .right {
              width: 30%;
              float: right;        
              display: flex;
              align-items: center;
          }
      }
  }
}

}
  
  `;
export default GlobalStyle;
