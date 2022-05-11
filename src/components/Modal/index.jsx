import PropTypes from "prop-types";
import { ModalForm, ModalOverlay } from "./style";

function Modal({ children, closeModal }) {
  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalForm>{children}</ModalForm>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};

export default Modal;
