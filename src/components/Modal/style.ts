import styled, { keyframes } from 'styled-components';

const ModalLayoutAppear = keyframes`
  0% {
    opacity: 0;
    background-color: transparent;
  }
  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  right: 0;
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  animation: ${ModalLayoutAppear} 0.5s forwards;
`;

type BackdropProps = {
  isAbleBackdropClick: boolean;
};

export const Backdrop = styled.div<BackdropProps>`
  height: 100vh;
  cursor: ${(props) => props.isAbleBackdropClick && 'pointer'};
`;

const ModalAppear = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`;

export const ModalContents = styled.div`
  overflow: auto;
  max-height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  animation: ${ModalAppear} 0.5s;
`;
