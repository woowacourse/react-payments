import PropTypes from 'prop-types';

const Modal = ({ handleModal, children }) => {
  return (
    <div>
      <div className="modal-dimmed" onClick={handleModal}></div>
      <div className="modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Modal;
