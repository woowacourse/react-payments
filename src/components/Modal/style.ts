import styled, { keyframes } from 'styled-components';

import { AnimationTypes } from '@Types/index';

import ANIMATION from '@Constants/Animation';

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

const ModalLayoutDisAppear = keyframes`
  0% {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  to {
    opacity: 0;
    background-color: transparent;
  }
`;

type ModalLayoutType = {
  animation: AnimationTypes;
};

export const ModalLayout = styled.div<ModalLayoutType>`
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  right: 0;
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  animation: ${(props) => (props.animation === ANIMATION.appear ? ModalLayoutAppear : ModalLayoutDisAppear)} 0.5s
    forwards;
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

const ModalDisAppear = keyframes`
  0% {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

type ModalContentsProps = {
  animation: AnimationTypes;
};

export const ModalContents = styled.div<ModalContentsProps>`
  overflow: auto;
  max-height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  animation: ${(props) => (props.animation === ANIMATION.appear ? ModalAppear : ModalDisAppear)} 0.5s;
`;
