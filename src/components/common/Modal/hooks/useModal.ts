import { useContext } from 'react';

import { ModalContext } from '../ModalContext';

const useModal = () => {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
