import { useState } from 'react';

export const useModal = (modalInitState = true) => {
  const [isOpenModal, setIsOpenModal] = useState(modalInitState);

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  return { isOpenModal, handleModalClose, handleModalOpen };
};
