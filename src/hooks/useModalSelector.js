import { useState } from 'react';

export const useModalSelector = () => {
  const [openedModal, setOpenedModal] = useState('');

  const openModal = (name) => {
    setOpenedModal(name);
  };

  const closeModal = () => {
    setOpenedModal('');
  };

  return [openedModal, openModal, closeModal];
};
