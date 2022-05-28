import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({ className, theme, handleClick, children }) => {
  return (
    <button className={`${cx('container')} ${className} font-${theme}`} onClick={handleClick}>
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
