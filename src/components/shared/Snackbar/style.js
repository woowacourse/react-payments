import styled, { keyframes } from 'styled-components/macro';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Root = styled.div`
  display: table-cell;
  vertical-align: bottom;
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 100;
`;

const SnackbarInner = styled.div`
  visibility: ${({ isShowing }) => (isShowing ? 'visible' : 'hidden')};
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;

  -webkit-animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.7s;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.7s;
`;

export { Root, SnackbarInner };
