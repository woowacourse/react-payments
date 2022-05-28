import PropTypes from 'prop-types';
import styles from './index.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  /**
   * component of layout
   */
  children: PropTypes.element,
};

export default Layout;
