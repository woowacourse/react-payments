import PropTypes from 'prop-types';

const Modal = ({ handleModal, children }) => {
  return (
    <>
      <div className="modal-dimmed" onClick={handleModal}></div>
      <div className="modal">{children}</div>
    </>
  );
};

Modal.propTypes = {
  /**
   * fuction to control modal
   */
  handleModal: PropTypes.func,
  /**
   * content of modal
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Modal;
