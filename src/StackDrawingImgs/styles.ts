import styled from "styled-components";

export const Container = styled.div`
  position          : relative;
  display           : flex;
  width             : 60%;
  height            : 60%;
`;

export const ImgContainer = styled.div<{move: boolean, zIndex: number}>`
  position          : absolute;
  width             : 100%;
  height            : 100%;
  display           : flex;
  justify-content   : center;
  align-items       : center;

  animation         : ${({move}) => move && `move 0.7s linear forwards`};
  z-index           : ${({zIndex}) => zIndex};
  @keyframes move{
    0% {
      transform     : translate(0%, 0%);
    }
    10% {
      transform     : translate(-1%, 1%);
    }
    20% {
      transform     : translate(1%, 1%);
    }
    30% {
      transform     : translate(-1%, 2%);
    }
    40% {
      transform     : translate(1%, 2%);
    }
    50% {
      transform     : translate(0%, 2%);
    }
    100% {
      transform     : translate(0%, 120%);
    }
  }
`;

export const Img = styled.img<{rotateDeg: number}>`
  width              : 100%;
  max-width          : 500px;
  height             : auto;

  border             : 1px solid red;
  transform          : rotate(${({rotateDeg}) => rotateDeg}deg);
`;