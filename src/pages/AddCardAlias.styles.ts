import styled, { keyframes } from 'styled-components';

const initOpacityAnim = keyframes`
0% {
  opacity: 0;
  transform: translateY(-20px);
}

100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const initOpacity2Anim = keyframes`
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
  animation: ${initOpacity2Anim} 1s linear 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
`;

export const CardLabelWrapper = styled.div`
  animation: ${initOpacityAnim} 0.5s linear 1;
  margin: 120px 0 36px 0;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 188px;
  width: 375px;
  display: flex;
  justify-content: flex-end;
`;
