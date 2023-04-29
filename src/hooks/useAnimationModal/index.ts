import { useState } from 'react';

import { AnimationTypes } from '@Types/index';

import ANIMATION from '@Constants/animation';

const useAnimationModal = (delayMsTime: number = 500) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animation, setAnimation] = useState<AnimationTypes>(ANIMATION.appear);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setAnimation(ANIMATION.disappear);
    setTimeout(() => {
      setIsModalOpen(false);
      setAnimation(ANIMATION.appear);
    }, delayMsTime);
  };

  return { isModalOpen, animation, openModal, closeModal, delayMsTime };
};

export default useAnimationModal;
