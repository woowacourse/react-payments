import { AnimationTypes } from '@Types/index';

export type ModalProps = {
  animation: AnimationTypes;
  isAbleBackdropClick?: boolean;
  closeModal: () => void;
};

export type AnimationType = {
  animation: AnimationTypes;
};

export type BackdropStyleProps = {
  isAbleBackdropClick: boolean;
};
