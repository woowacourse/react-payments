import PropTypes from 'prop-types';

const Button = ({ className, theme, children, handleClick }) => {
  return (
    <button className={`button-box ${className} font-${theme}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  handleClick: PropTypes.func,
};

export default Button;
