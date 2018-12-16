import styled from "styled-components";

export const BookWrapper = styled.div`
  position: relative;
  margin: 30px auto;
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
  width: 100 %;
  height: 100 %;
  webkit-transition: 1.5 s - webkit - transform;
  transition: 1.5 s transform;
  -webkit-transform-style: preserve - 3 d;
  transform-style: preserve - 3 d;
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  background-color: red;
  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;

export const ArticleWrapper = styled.div`
  margin: 0px auto;
`;

export const ArticleListWrapper = styled.div`
  overflow: hidden;
  width: 1280px;
  margin: 0 auto;
`;
