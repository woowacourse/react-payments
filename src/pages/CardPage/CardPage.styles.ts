import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const CardContainer = styled.main`
  width: 375px;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 90px 30px;
`;
