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
