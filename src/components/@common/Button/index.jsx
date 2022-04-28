import PropTypes from 'prop-types';

function Button({ isDisabled, onClick, children }) {
  return (
    <button className="button" type="button" onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
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
