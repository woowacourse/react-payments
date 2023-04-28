import { useState } from "react";

const useModal = (initValue: boolean) => {
  const [modalOpen, setModalOpen] = useState(initValue);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return { modalOpen, closeModal, openModal };
};

export default useModal;
