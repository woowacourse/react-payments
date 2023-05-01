import { PropsWithChildren, useEffect } from 'react';

import useAnimationModal from '@Hooks/useAnimationModal';

import * as S from './style';
import { ModalProps } from './type';

function Modal({ title, delayMsTime = 0, isAbleBackdropClick = true, children }: PropsWithChildren<ModalProps>) {
  const { animation, closeModal, changeDelayMsTime } = useAnimationModal();

  const handleCloseModal = () => closeModal();

  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;
    handleCloseModal();
  };

  useEffect(() => {
    changeDelayMsTime(delayMsTime);
  }, []);

  return (
    <S.ModalLayout animation={animation} delayMsTime={delayMsTime}>
      <S.Backdrop onClick={handleClickBackdrop} isAbleBackdropClick={isAbleBackdropClick} />
      <S.ModalContents animation={animation} delayMsTime={delayMsTime}>
        <S.TopSheet>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
        </S.TopSheet>
        {children}
      </S.ModalContents>
    </S.ModalLayout>
  );
}

export default Modal;
