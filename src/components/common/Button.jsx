import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from 'css/module/Button.module.css';

const Button = ({ className, theme, children }) => {
  return <button className={`${styles.container} ${className} font-${theme}`}>{children}</button>;
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

export default memo(Button);
