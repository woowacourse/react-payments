import { useState } from 'react';

const useModal = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  return { toggleModal, openModal, closeModal };
};

export default useModal;
