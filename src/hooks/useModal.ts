import { useState } from "react";

function useModal(initialState: boolean) {
  const [isModalOpened, setIsModalOpened] = useState(initialState);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return { isModalOpened, openModal, closeModal };
}
export default useModal;
