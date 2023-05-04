import styled, { keyframes } from 'styled-components';

export const RegisterLoading = () => {
  return <Phone />;
};

const thumbMove = keyframes`
0% {
      left: 60px;
      top: 8px;
    }
    10% {
      left: 20px;
      top: 8px;
    }
    20% {
      left: 10px;
      top: 40px;
    }
    30% {
      left: 50px;
      top: 40px;
    }
    40% {
      left: 50px;
      top: 80px;
    }
    50% {
      left: 20px;
      top: 80px;
    }
    60% {
      left: 10px;
      top: 110px;
    }
    70% {
      left: 60px;
      top: 110px;
    }
    80% {
      left: 75px;
      top: 135px;
    }
    90% {
      left: 45px;
      top: 155px;
    }
    100% {
      left: 25px;
      top: 8px;
    }
`;

const clpszp = keyframes`
    0% {
      background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px, 5px 145px;
    }
    20% {
      background-position: -100px 5px, 5px 40px, 5px 75px, 5px 110px, 5px 145px;
    }
    40% {
      background-position: -100px 5px, 100px 40px, 5px 75px, 5px 110px,
        5px 145px;
    }
    60% {
      background-position: -100px 5px, 100px 40px, -100px 75px, 5px 110px,
        5px 145px;
    }
    80% {
      background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px,
        5px 145px;
    }
    100% {
      background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px,
        -100px 145px;
    }
`;

const Phone = styled.div`
  & {
    width: 112px;
    height: 218px;
    border-radius: 8px;
    background: #fff;
    background-image: linear-gradient(#c5eeef 30px, transparent 0),
      linear-gradient(#fbf8f1 30px, transparent 0),
      linear-gradient(#92dee4 30px, transparent 0),
      linear-gradient(#4db7d3 30px, transparent 0),
      linear-gradient(#4096c7 30px, transparent 0);
    background-repeat: no-repeat;
    background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px, 5px 145px;
    background-size: 90px 30px;
    border: 6px solid #222;
    border-width: 18px 6px 20px;
    box-sizing: border-box;
    position: relative;
    animation: ${clpszp} 4s linear infinite;
  }
  &:before {
    content: '';
    position: absolute;
    left: -6px;
    top: -18px;
    width: 112px;
    height: 218px;
    border-radius: 8px;
    background: linear-gradient(
      80deg,
      rgba(0, 0, 0, 0.05) 45%,
      rgba(0, 0, 0, 0) 46%
    );
  }
  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    left: 60px;
    top: 8px;
    width: 24px;
    height: 24px;
    z-index: 2;
    backdrop-filter: blur(5px);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.12);
    border: 2px solid rgba(255, 255, 255, 0.2);
    animation: ${thumbMove} 4s linear infinite;
  }
`;
