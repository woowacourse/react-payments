import { keyframes } from 'styled-components';

export const ModalLayoutAppear = keyframes`
  0% {
    opacity: 0;
    background-color: transparent;
  }
  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ModalLayoutDisAppear = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  to {
    opacity: 0;
    background-color: transparent;
  }
`;

export const ModalContentsAppear = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const ModalContentsDisAppear = keyframes`
  0% {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;
