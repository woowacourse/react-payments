import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Container = ({ className, children, ...props }) => {
  const containerClass = cx('Container', className);

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Container.defaultProps = {
  className: '',
};
