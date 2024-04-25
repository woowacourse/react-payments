import styled from 'styled-components';

export const AppLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100vh;
`;

export const CardInfoWrapper = styled.section`
  margin-top: 50px;
  overflow: auto;
  height: calc(100vh - 310px);
`;
