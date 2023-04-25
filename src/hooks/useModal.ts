import { useState } from 'react';

function useModal(initialState = false) {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return { isModalOpen, closeModal, openModal };
}

export default useModal;
