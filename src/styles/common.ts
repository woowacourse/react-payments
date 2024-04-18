import styled from 'styled-components';

const SCREEN_WIDTH = 480;

export const ErrorWrapper = styled.div`
  height: 44px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

export const GlobalLayout = styled.div`
  width: ${SCREEN_WIDTH}px;
  height: 100vh;
  margin: 0 auto;
`;
