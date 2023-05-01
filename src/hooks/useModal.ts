import { useState } from 'react';

export const useModal = (isOpen: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return { isModalOpen, openModal, closeModal, toggleModal };
};
