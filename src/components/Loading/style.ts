import styled, { keyframes } from 'styled-components';

export const Layout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingBar = styled.div`
  width: 170px;
  height: 100px;
  position: relative;
`;

export const LoadingBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

export const LoadingProgressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

type LoadingProgressType = {
  delayTime: number;
  backgroundColor: string;
};

export const LoadingProgress = styled.div<LoadingProgressType>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  animation: ${LoadingProgressAnimation} ${(props) => props.delayTime}s ease-in-out;
`;

export const LoadingExplanation = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #575757;
  margin-top: 42px;
`;
