import { useState } from 'react';

export const useCardModal = (defaultModal: boolean): [boolean, () => void, () => void] => {
  const [isModal, setModal] = useState<boolean>(defaultModal);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return [isModal, closeModal, openModal];
};
