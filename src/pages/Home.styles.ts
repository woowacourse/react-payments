import styled, { keyframes } from 'styled-components';

const initAnim = keyframes`
0% {
  opacity: 0;
  transform: translateY(-20px);
}

100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const PageWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  animation: ${initAnim} 0.5s linear 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const EmptyCardText = styled.p`
  color: #575757;
  margin-bottom: 8px;
`;

export const CardAlias = styled.p`
  height: 24px;
  margin: 8px 0 20px 0;
`;
