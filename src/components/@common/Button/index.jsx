import PropTypes from 'prop-types';

import Container from './styles';

function Button({ className, type, action, size, isDisabled, onClick, children }) {
  return (
    <Container
      className={`button ${className}`}
      buttonType={type}
      type={action}
      size={size}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </Container>
  );
}

Button.defaultProps = {
  type: 'default',
  action: 'button',
  size: 'medium',
  isDisabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
