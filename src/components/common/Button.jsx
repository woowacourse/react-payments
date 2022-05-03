import PropTypes from 'prop-types';

const Button = ({ className, theme, children }) => {
  return <button className={`button-box ${className} font-${theme}`}>{children}</button>;
};

Button.propTypes = {
  /**
   * className of Button
   */
  className: PropTypes.string,
  /**
   * theme of Button
   */
  theme: PropTypes.string,
  /**
   * child element of Button
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Button.defaultProps = {
  className: '',
  theme: '',
};

export default Button;
