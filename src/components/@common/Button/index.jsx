import PropTypes from 'prop-types';
import styles from './index.module.css';

const Button = ({ className, theme, handleClick, children }) => {
  return (
    <button className={`${styles.container} ${className} font-${theme}`} onClick={handleClick}>
      {children}
    </button>
  );
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
   * handle event when user click Button
   */
  handleClick: PropTypes.func,
  /**
   * child element of Button
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Button.defaultProps = {
  className: '',
  theme: '',
  handleClick: undefined,
};

export default Button;
