import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
0% {
  transform: rotate(0deg)
}

100% {
  transform : rotate(360deg) 
}
`;

export const SectionWrapper = styled.section`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinnerWrapper = styled.img`
  margin-bottom: 36px;
  animation: ${spinAnimation} 1s linear 2;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  margin-bottom: 4px;
`;
