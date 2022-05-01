import React from 'react';

import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Shimmer = () => {
  return (
    <ShimmerWrapperStyle>
      <ShimmerStyle />
    </ShimmerWrapperStyle>
  );
};

const loading = keyframes`
    0% {transform: translateX(-150%);}
    50% {transform: translateX(-60%);}
    100% {transform: translateX(150%);}
}`;
const ShimmerWrapperStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 1.5s infinite;
`;
const ShimmerStyle = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-200deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
