import { createGlobalStyle } from "styled-components";

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


.top_info {
  color: #fff;
  text-align: center;
  font-weight: 300;
  h1 {
      font-weight: 300;
      font-size: 25px;
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
      height: calc( 100vh - 380px);
      ul {
          padding: 0;
          margin: 0;
      }
      li {
          padding: 10px 0;
          list-style: none;
      }
      
  }
}

  
  `;
export default GlobalStyle;
