import { AnimationTypes } from '@Types/index';

export type ModalProps = {
  delayMsTime?: number;
  isAbleBackdropClick?: boolean;
};

export type AnimationType = {
  animation: AnimationTypes;
  delayMsTime: number;
};

export type BackdropStyleProps = {
  isAbleBackdropClick: boolean;
};
