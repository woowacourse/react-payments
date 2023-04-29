/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

import { AnimationTypes } from '@Types/index';

import ANIMATION from '@Constants/animation';

const ModalContext = createContext({
  isModalOpen: false,
  animation: ANIMATION.appear as AnimationTypes,
  delayMsTime: 0,
  openModal: () => {},
  closeModal: () => {},
  changeDelayMsTime: (time: number) => {},
  changeAnimationMode: (mode: AnimationTypes) => {},
});

export default ModalContext;
