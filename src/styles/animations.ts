import { keyframes } from "styled-components";

export const rotateRound = keyframes`
 0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;