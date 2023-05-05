import { keyframes } from "styled-components";

export const sway = keyframes`  
  20%{
    transform: perspective(800px) rotateY(18deg) 
  }
  40%{
    transform: perspective(800px) rotateY(-15deg) 
  }
  55%{
    transform: perspective(800px) rotateY(12deg) 
  }  
  70%{
    transform: perspective(800px) rotateY(-8deg) 
  }
  78%{
    transform: perspective(800px) rotateY(5deg) 
  }
  86%{
    transform: perspective(800px) rotateY(-3deg) 
  }  
  94%{
    transform: perspective(800px) rotateY(1deg) 
  }  
  100%{
    transform: perspective(800px) rotateY(0deg) 
  } 
`;

export const glare = keyframes` 
  20%{
    transform: translateX(-120px) 
  }
  40%{
    transform: translateX(105px)
  }
  55%{
    transform: translateX(-90px)
  }  
  70%{
    transform: translateX(75px)
  }
  78%{
    transform: translateX(-50px)
  }
  86%{
    transform: translateX(20px)
  }
  94%{
    transform:translateX(-7px)
  }
  100%{
    transform: translateX(0px) 
  } 
`;
