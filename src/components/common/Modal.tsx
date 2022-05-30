import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  handleModal: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Modal;
