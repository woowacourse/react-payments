import styled from 'styled-components';
import { flexCenter } from '../../../styles/mixin';

export const Root = styled.div`
  ${flexCenter}
  min-height: 100vh;
`;
export const Loader = styled.div`
  ${flexCenter}
  position: relative;
  width: 200px;
  height: 200px;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    pointer-events: none;
    animation: animate 5s linear infinite;
  }
`;
export const Border1 = styled.span`
  border-radius: 38% 62% 64% 36% / 43% 35% 34% 35%;
`;
export const Border2 = styled.span`
  border-radius: 41% 59% 40% 60% / 65% 66% 34% 35%;
  animation-direction: reverse !important;
`;
export const Border3 = styled.span`
  border-radius: 73% 27% 56% 44% / 57% 74% 26% 43%;
  animation-duration: 3s !important;
`;
export const Text = styled.h2``;
