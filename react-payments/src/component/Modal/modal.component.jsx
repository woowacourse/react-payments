import "./modal.css";

const Modal = ({ toggleModal, children }) => {
  return (
    <div className="modal-dimmed" onClick={toggleModal}>
      <div className="modal flex-center">{children}</div>
    </div>
  );
};

export default Modal;
