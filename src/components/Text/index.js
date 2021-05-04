import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Text = ({ className, children, ...rest }) => {
  return (
    <span className={cx('Text', className)} {...rest}>
      {children}
    </span>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
