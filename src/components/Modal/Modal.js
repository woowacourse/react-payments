import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Styled from './Modal.styles';

const Modal = forwardRef(({ children, mobile, onClose }, ref) => {
  const handleClose = (event) => {
    if (!onClose) return;

    if (event.currentTarget !== event.target) return;
    onClose();
  };

  return (
    <Styled.Dimmer onClick={handleClose} mobile={mobile}>
      <Styled.Container tabIndex="-1" ref={ref}>
        {children}
      </Styled.Container>
    </Styled.Dimmer>
  );
});

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  mobile: false,
  onClose: null,
};

export default Modal;
