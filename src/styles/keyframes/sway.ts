import { keyframes } from "styled-components";

export const swayX = keyframes`
  0%{
    transform: perspective(800px) rotateX(5deg)
  }
  
  100%{
    transform: perspective(800px) rotateX(-5deg) 
  }
`;

export const swayY = keyframes`
  0%{
    transform: perspective(800px) rotateY(10deg) 
  }
  
  100%{
    transform: perspective(800px) rotateY(-10deg) 
  }
`;
