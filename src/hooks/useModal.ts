import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, openModal, closeModal };
};

export default useModal;
