import PropTypes from 'prop-types';

function Button({ className, isDisabled, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: 'button',
  isDisabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
