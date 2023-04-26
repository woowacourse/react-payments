import { useState } from 'react';

interface UseModal {
  modalOpen: boolean;
  openModal: (content: React.ReactNode) => void;
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
