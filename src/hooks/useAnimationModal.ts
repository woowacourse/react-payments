import { useState } from 'react';

import { AnimationTypes } from '@Types/index';

import ANIMATION from '@Constants/Animation';

const useAnimationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animation, setAnimation] = useState<AnimationTypes>(ANIMATION.appear);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setAnimation(ANIMATION.disappear);
    setTimeout(() => {
      setIsModalOpen(false);
      setAnimation(ANIMATION.appear);
    }, 500);
  };

  return { isModalOpen, animation, openModal, closeModal };
};

export default useAnimationModal;
