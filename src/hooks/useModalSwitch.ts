import { useState } from 'react';

const useModalSwitch = (initValue: boolean) => {
  const [showModal, setShowModal] = useState(initValue);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return { showModal, openModal, closeModal };
};

export default useModalSwitch;
