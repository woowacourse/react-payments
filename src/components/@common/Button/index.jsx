import PropTypes from 'prop-types';

import Container from './styles';

function Button({ className, type, action, size, width, isDisabled, onClick, children }) {
  return (
    <Container
      className={`button ${className}`}
      buttonType={type}
      type={action}
      size={size}
      onClick={onClick}
      disabled={isDisabled}
      style={{ width }}
    >
      {children}
    </Container>
  );
}

Button.defaultProps = {
  className: '',
  type: 'default',
  action: 'button',
  size: 'medium',
  width: 'unset',
  isDisabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
