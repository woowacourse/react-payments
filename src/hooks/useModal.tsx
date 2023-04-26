/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { ModalContext } from 'ModalProvider';

interface UseModal {
  modalOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  modalContent: React.ReactNode;
}
export const useModal = (): UseModal => {
  const modalState = useContext(ModalContext);
  const {
    modalOpen, setModalOpen, modalContent, setModalContent
  } = modalState;

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    modalOpen, openModal, closeModal, modalContent
  };
};
