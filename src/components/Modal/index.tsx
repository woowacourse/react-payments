import { PropsWithChildren, useEffect } from 'react';

import useAnimationModal from '@Hooks/useAnimationModal';

import * as S from './style';
import { ModalProps } from './type';

function Modal({ delayMsTime = 0, isAbleBackdropClick = true, children }: PropsWithChildren<ModalProps>) {
  const { animation, closeModal, changeDelayMsTime } = useAnimationModal();

  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;
    closeModal();
  };

  useEffect(() => {
    changeDelayMsTime(delayMsTime);
  }, []);

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
