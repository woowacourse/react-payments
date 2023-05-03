import { useContext } from 'react';

import ModalContext from '@Contexts/Modal/ModalContext';

import ANIMATION from '@Constants/Animation';

const useAnimationModal = () => {
  const { isModalOpen, animation, delayMsTime, openModal, closeModal, changeAnimationMode, changeDelayMsTime } =
    useContext(ModalContext);

  const closeModalWithTime = () => {
    changeAnimationMode(ANIMATION.disappear);
    setTimeout(() => {
      closeModal();
      changeAnimationMode(ANIMATION.appear);
    }, delayMsTime);
  };

  return { isModalOpen, animation, delayMsTime, openModal, closeModal: closeModalWithTime, changeDelayMsTime };
};

export default useAnimationModal;
