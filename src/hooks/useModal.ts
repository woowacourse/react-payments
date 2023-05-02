import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, modalOpen, modalClose };
};

export default useModal;
