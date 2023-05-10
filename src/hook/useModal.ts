import { useState } from "react";

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return {
    modalOpen,
    openModal,
    closeModal,
  };
};
