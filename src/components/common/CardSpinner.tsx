import styled, { keyframes } from 'styled-components';

const CardSpinner = () => {
  return <Spinner />;
};

const cardMoving = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);    
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`;

const Spinner = styled.div`
  width: 170px;
  height: 106px;
  position: relative;
  overflow: hidden;
  background: #d9d9d9;
  border-radius: 10px;
  &::after {
    content: '';
    width: 80px;
    height: 106px;
    background: #333333;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${cardMoving} 2s ease-in-out infinite;
  }
`;

export default CardSpinner;
