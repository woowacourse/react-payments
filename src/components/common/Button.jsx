import PropTypes from 'prop-types';

const Button = ({ className, theme, children, onClick }) => {
  return (
    <button className={`button-box ${className} font-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
};

export default Button;
