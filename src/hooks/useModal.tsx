import { useContext } from "react";
import { ModalContext } from "src/context/ModalContext";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const closeModal = () => {
    if (!setIsModalOpen) return;
    setIsModalOpen(false);
  };

  const openModal = () => {
    if (!setIsModalOpen) return;
    setIsModalOpen(true);
  };

  return { isModalOpen, openModal, closeModal };
}

export default useModal;
