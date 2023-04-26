import { useContext, useRef } from "react";
import { ModalContext } from "src/context/ModalContext";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    if (!setIsModalOpen) return;
    setIsModalOpen(false);
  };

  const openModal = () => {
    if (!setIsModalOpen) return;
    setIsModalOpen(true);
  };

  return { isModalOpen, openModal, closeModal, modalRef };
}

export default useModal;
