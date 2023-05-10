import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
0% {
  transform: rotate(0deg)
}

100% {
  transform : rotate(360deg) 
}
`;

export const Spinner = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 6px solid transparent;
  border-radius: 50%;
  border-top-color: #0050ff;
  border-bottom-color: #0050ff;
  animation: ${spinAnimation} 0.8s ease 3;
`;
