import { useContext, useRef } from "react";
import { ModalContext } from "src/context/ModalContext";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    if (!setIsModalOpen) return;
    modalRef.current?.close();
    setIsModalOpen(false);
  };

  const openModal = () => {
    if (!setIsModalOpen) return;
    modalRef.current?.showModal();
    setIsModalOpen(true);
  };

  return { isModalOpen, openModal, closeModal, modalRef };
}

export default useModal;
