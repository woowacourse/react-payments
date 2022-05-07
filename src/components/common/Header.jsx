import PropTypes from 'prop-types';
import styles from 'css/Header.module.css';

const Header = ({ title, left, right }) => {
  return (
    <div className={styles.container}>
      {left}
      <h2 className={styles.title}>{title}</h2>
      {right}
    </div>
  );
};

Header.propTypes = {
  /**
   * header title
   */
  title: PropTypes.string,
  /**
   * left side of header
   */
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * right side of header
   */
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Header;
