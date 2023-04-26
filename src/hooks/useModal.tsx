import { useState } from 'react';

interface UseModal {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
const useModal = (): UseModal => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    modalOpen, openModal, closeModal
  };
};
export default useModal;
