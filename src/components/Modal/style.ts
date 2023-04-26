import styled, { keyframes } from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Backdrop = styled.div`
  height: 100vh;
  filter: blur(1px);
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

type ModalContentsProps = {
  isOpen: boolean;
};

export const ModalContents = styled.div<ModalContentsProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  animation: ${ModalAppear} 1s;
`;
