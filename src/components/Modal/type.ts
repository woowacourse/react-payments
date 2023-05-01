import { AnimationTypes } from '@Types/index';

export type ModalProps = {
  title: string;
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
