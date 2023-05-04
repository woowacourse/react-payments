import { useState } from "react";

export const useModalState = () => {
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
