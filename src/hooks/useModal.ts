import { useCallback, useState } from "react";

function useModal(initialState: boolean) {
  const [isModalOpened, setIsModalOpened] = useState(initialState);

  const openModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return { isModalOpened, openModal, closeModal };
}

export default useModal;
