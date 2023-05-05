import { useState } from 'react';

export const useModal = (modalInitState = true) => {
  const [isOpenModal, setIsOpenModal] = useState(modalInitState);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return { isOpenModal, handleCloseModal, handleOpenModal };
};
