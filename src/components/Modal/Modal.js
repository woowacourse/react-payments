/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Styled from './Modal.styles';

const Modal = forwardRef(({ children, mobile, isOpened, onClose }, ref) => {
  const handleClose = (event) => {
    if (!onClose) return;

    if (event.currentTarget !== event.target) return;
    onClose?.();
  };

  return (
    <>
      <Styled.Dimmer onClick={handleClose} isOpened={isOpened} mobile={mobile}>
        <Styled.Container tabIndex="-1" ref={ref}>
          {children}
        </Styled.Container>
      </Styled.Dimmer>
    </>
  );
});

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.bool,
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  mobile: false,
  isOpened: false,
  onClose: null,
};

export default Modal;
