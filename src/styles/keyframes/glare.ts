import { keyframes } from "styled-components";

export const glareX = keyframes`
  0%{
    transform: translateX(120px)
  } 

  100%{
    transform: translateX(-120px)
  }
`;

export const glareY = keyframes`
  0%{
    transform: translateY(70px)
  }
  
  100%{
    transform: translateY(-70px)
  }
`;
