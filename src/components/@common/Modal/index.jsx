import PropTypes from 'prop-types';
import reactDom from 'react-dom';

import { MODAL_STATE } from 'constants/';
import Container from './styles';

function Modal({ state, handleClose, handleHidden, children }) {
  const onAnimationEnd = () => {
    if (state === MODAL_STATE.VISIBLE) return;

    handleHidden();
  };

  const ModalContainer = (
    <Container className={state} onClick={handleClose} onAnimationEnd={onAnimationEnd}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Container>
  );

  const $root = document.getElementById('root');
  return reactDom.createPortal(ModalContainer, $root);
}

Modal.defaultProps = {
  className: MODAL_STATE.HIDDEN,
  handleClose: () => {},
  handleHidden: () => {},
};

Modal.propTypes = {
  className: PropTypes.string,
  handleClose: PropTypes.func,
  handleHidden: PropTypes.func,
};

export default Modal;
