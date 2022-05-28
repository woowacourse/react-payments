import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('app')}>{children}</div>
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
