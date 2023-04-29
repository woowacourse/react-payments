import { PropsWithChildren } from 'react';

import * as S from './style';
import { ModalProps } from './type';

function Modal({
  animation,
  isAbleBackdropClick = true,
  closeModal,
  children,
  delayMsTime = 500,
}: PropsWithChildren<ModalProps>) {
  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;
    closeModal();
  };

  return (
    <S.ModalLayout animation={animation} delayMsTime={delayMsTime}>
      <S.Backdrop onClick={handleClickBackdrop} isAbleBackdropClick={isAbleBackdropClick} />
      <S.ModalContents animation={animation} delayMsTime={delayMsTime}>
        {children}
      </S.ModalContents>
    </S.ModalLayout>
  );
}

export default Modal;
