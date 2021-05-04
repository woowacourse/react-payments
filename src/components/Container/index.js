import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Container = ({ className, children, ...rest }) => {
  const containerClass = cx('Container', className);

  return (
    <div className={containerClass} {...rest}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
