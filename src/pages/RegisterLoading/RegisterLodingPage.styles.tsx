import styled, { keyframes } from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SpinnerText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007aff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${SpinnerAnimation} 0.8s linear infinite;
`;

const CheckmarkAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Checkmark = styled.svg`
  stroke-width: 5px;
  opacity: 0;
  animation: ${CheckmarkAnimation} 0.2s ease-in-out 0.5s forwards;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #007aff;
  color: #fff;
  cursor: pointer;
`;

export const SuccessWrapper = styled.div`
  text-align: center;
`;
