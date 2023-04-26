import { PropsWithChildren } from 'react';

import * as S from './style';

export type ModalProps = {
  isAbleBackdropClick?: boolean;
  closeModal: () => void;
};

function Modal({ isAbleBackdropClick = true, closeModal, children }: PropsWithChildren<ModalProps>) {
  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;

    closeModal();
  };

  return (
    <S.ModalLayout>
      <S.Backdrop onClick={handleClickBackdrop} />
      <S.ModalContents isOpen>{children}</S.ModalContents>
    </S.ModalLayout>
  );
}

export default Modal;
