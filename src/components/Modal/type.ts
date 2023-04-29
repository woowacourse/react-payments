import { AnimationTypes } from '@Types/index';

export type ModalProps = {
  animation: AnimationTypes;
  delayMsTime: number;
  isAbleBackdropClick?: boolean;
  closeModal: () => void;
};

export type AnimationType = {
  animation: AnimationTypes;
  delayMsTime: number;
};

export type BackdropStyleProps = {
  isAbleBackdropClick: boolean;
};
