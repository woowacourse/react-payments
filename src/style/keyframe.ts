import { keyframes } from "styled-components";

export const slideBottomToUp = keyframes`
0% {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
}
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
`;

export const slideUpToBottom = keyframes`
0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
100% {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
}
`;
