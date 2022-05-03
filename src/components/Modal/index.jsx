import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Modal = ({ children, onClickDimmer }) => {
  return (
    <div>
      <styled.Dimmer onClick={onClickDimmer} />
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClickDimmer: PropTypes.func,
};

export default Modal;
