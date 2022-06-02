import ReactDOM from 'react-dom';

interface ModalProps {
  handleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleModal, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-dimmed" onClick={handleModal}></div>
      <div className="modal">{children}</div>
    </div>,
    document.getElementById('portal') as HTMLElement,
  );
};

export default Modal;
