import PropTypes from 'prop-types';

const Button = ({ className, children, handleClick, theme }) => {
  return (
    <button className={`button-box ${className} font-${theme}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'default',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  handleClick: PropTypes.func,
  theme: PropTypes.string,
};

export default Button;
