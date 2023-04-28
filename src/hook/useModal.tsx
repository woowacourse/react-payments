import { useState } from "react";

export const useModal = (isOpen: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return { isModalOpen, closeModal, openModal };
};
