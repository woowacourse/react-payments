import { ModalForm, ModalOverlay } from "./style";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

function Modal({ children, closeModal }: ModalProps) {
  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalForm>{children}</ModalForm>
    </>
  );
}

export default Modal;
