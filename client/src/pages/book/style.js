import styled from "styled-components";
import bg from "../../statics/images/bg.jpg";
import page_bg from "../../statics/images/page_bg.png";

export const BookWrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const BookLeft = styled.div`
  position: relative;
  margin: 30px auto;
`;

export const BookRight = styled.div`
  position: relative;
  margin: 30px auto;
`;

export const BookCenter = styled.div`
  position: relative;
  margin: 30px auto;
`;

export const PageWrapper = styled.div`
  position: relative;
  margin: 30px auto;
  width: 77vw;
  height: 48vw;
  max-width: 1320px;
  background-size: contain;
  background-image: url(${page_bg});
`;
export const PageScene = styled.div`
  position: absolute;
  top: 1.3vw;
  right: 4.2vw;
  width: 34.5vw;
  height: 40.8vw;
  /*            margin: 16px auto;*/
  -webkit-perspective: 2000px;
  perspective: 2000px;
`;

export const PageBook = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`;

export const PageBox = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const PageItem = styled.div`
  cursor: pointer;
  position: absolute;
  color: black;
  width: 100%;
  height: 100%;
  -webkit-transition: 1.5s -webkit-transform;
  transition: 1.5s transform;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  &.big {
    width: 106%;
    top: -2.5%;
  }

  &.active {
    z-index: 1;
  }

  &.flipped {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  &.flipped:last-of-type {
    z-index: 1;
  }
`;

const Common = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const ItemFront = styled(Common)``;
export const ItemBack = styled(Common)`
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
`;

export const ArticleWrapper = styled.div`
  margin: 0px auto;
`;

export const ArticleListWrapper = styled.div`
  overflow: hidden;
  width: 1280px;
  margin: 0 auto;
`;

export const EditorWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const EditorContainer = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;
