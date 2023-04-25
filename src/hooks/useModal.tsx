/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { ModalContext } from 'ModalProvider';

interface UseModalProps {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const useModal = (): UseModalProps => {
  const modalState = useContext(ModalContext);
  const { modalOpen, setModalOpen } = modalState;

  const openModal = () => {
    console.log('modal is opened');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { modalOpen, openModal, closeModal };
};
