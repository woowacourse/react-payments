import { PropsWithChildren } from 'react';

import * as S from './style';
import { ModalProps } from './type';

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
