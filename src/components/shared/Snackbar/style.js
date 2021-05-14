import styled from 'styled-components/macro';

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
`;

export { Root, SnackbarInner };
