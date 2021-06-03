import { useState } from 'react';

export const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return { isModalOpened, openModal, closeModal };
};
