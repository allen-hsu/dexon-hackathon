import styled from "styled-components";

export const BookWrapper = styled.div`
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

export const PageItem = styled.section`
  background: red;
  margin: 50px 0 20px 0;
  width: 100%;
  height: 100px;
`;
// export const Header = styled.div`
//   margin: 50px 0 20px 0;
//   line-height: 44px;
//   font-size: 34px;
//   color: #333;
//   font-weight: bold;
// `;

// export const Content = styled.div`
//   color: #2f2f2f;
//   img {
//     width: 100%;
//   }
//   p {
//     margin: 25px 0;
//     color: #222;
//     font-size: 16px;
//     line-height: 30px;
//   }
//   b {
//     font-weight: bold;
//   }
// `;
