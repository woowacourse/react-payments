import styled, { keyframes } from 'styled-components';

const pgfill = keyframes`
  0% {
    background-image: linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0);
  }
  25% {
    background-image: linear-gradient(#FF3D00 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0);
  }
  50% {
    background-image: linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FF3D00 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0);
  }
  75% {
    background-image: linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FF3D00 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0);
  }
  100% {
    background-image: linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FFF 20px, transparent 0),
      linear-gradient(#FF3D00 20px, transparent 0);
  }
`;

export const LoadingSpinner = styled.span`
  display: block;
  position: relative;
  height: 20px;
  width: 140px;
  background-image: linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 20px auto;
  background-position: 0 0, 40px 0, 80px 0, 120px 0;
  animation: ${pgfill} 1s linear infinite;
`;

export const LoadingSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 40px 0px;
`;
