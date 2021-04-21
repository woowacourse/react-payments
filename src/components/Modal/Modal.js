import PropTypes from 'prop-types';
import Styled from './Modal.styles';

const Modal = ({ children, onClose }) => {
  const handleClose = (event) => {
    if (!onClose) return;

    if (event.currentTarget !== event.target) return;
    onClose();
  };

  return (
    <Styled.Dimmer onClick={handleClose}>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Dimmer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  onClose: null,
};

export default Modal;
