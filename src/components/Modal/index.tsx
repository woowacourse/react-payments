import { PropsWithChildren } from 'react';

import { AnimationTypes } from '@Types/index';

import * as S from './style';

export type ModalProps = {
  animation: AnimationTypes;
  isAbleBackdropClick?: boolean;
  closeModal: () => void;
};

function Modal({ animation, isAbleBackdropClick = true, closeModal, children }: PropsWithChildren<ModalProps>) {
  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;
    closeModal();
  };

  return (
    <S.ModalLayout animation={animation}>
      <S.Backdrop onClick={handleClickBackdrop} isAbleBackdropClick={isAbleBackdropClick} />
      <S.ModalContents animation={animation}>{children}</S.ModalContents>
    </S.ModalLayout>
  );
}

export default Modal;
