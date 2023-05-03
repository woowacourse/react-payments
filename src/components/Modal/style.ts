import styled from 'styled-components';

import ANIMATION from '@Constants/Animation';

import {
  ModalContentsAppear,
  ModalContentsDisAppear,
  ModalLayoutAppear,
  ModalLayoutDisAppear,
} from '@Animations/modalAnimations';

import { AnimationType, BackdropStyleProps } from './type';

export const ModalLayout = styled.div<AnimationType>`
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  margin: 0 auto;
  animation: ${(props) => (props.animation === ANIMATION.appear ? ModalLayoutAppear : ModalLayoutDisAppear)}
    ${(props) => `${props.delayMsTime / 1000}s`} forwards;
`;

export const Backdrop = styled.div<BackdropStyleProps>`
  height: 100vh;
  cursor: ${(props) => props.isAbleBackdropClick && 'pointer'};
`;

export const ModalContents = styled.div<AnimationType>`
  overflow: auto;
  max-height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  animation: ${(props) => (props.animation === ANIMATION.appear ? ModalContentsAppear : ModalContentsDisAppear)}
    ${(props) => `${props.delayMsTime / 1000}s`} forwards;
`;

export const TopSheet = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  font-size: 18px;
  cursor: pointer;
`;
