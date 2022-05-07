import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const Modal = ({ children, isModalOpened, closeModal }) => {
  const root = document.getElementById('modal-root');

  return isModalOpened && root
    ? ReactDOM.createPortal(
        <div>
          <Styled.Dimmer onClick={closeModal} />
          {children}
        </div>,
        root,
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.element,
  isModalOpened: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Modal;
