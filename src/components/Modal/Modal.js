import PropTypes from 'prop-types';
import Styled from './Modal.styles';

const Modal = ({ children, mobile, onClose }) => {
  const handleClose = (event) => {
    if (!onClose) return;

    if (event.currentTarget !== event.target) return;
    onClose();
  };

  return (
    <Styled.Dimmer onClick={handleClose} mobile={mobile}>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Dimmer>
  );
};

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
