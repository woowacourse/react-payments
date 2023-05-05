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

const initLateAnim = keyframes`
0% {
  opacity: 0;
  transform: translateY(-20px);
}

50% {
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  animation: ${initLateAnim} 1s linear 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
`;

export const CardLabelWrapper = styled.div`
  animation: ${initAnim} 0.5s linear 1;
  margin: 120px 0 36px 0;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 188px;
  width: 375px;
  display: flex;
  justify-content: flex-end;
`;

export const NoCardTitle = styled.h2`
  margin-top: 180px;
`;

export const NoCardText = styled.p`
  margin: 20px 0;
`;
