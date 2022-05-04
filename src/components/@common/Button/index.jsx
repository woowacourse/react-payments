import PropTypes from 'prop-types';

import Container from './styles';

function Button({ isDisabled, onClick, children }) {
  return (
    <Container className="button" type="button" onClick={onClick} disabled={isDisabled}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
