import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Label = ({ className, children, ...rest }) => {
  return (
    <label className={cx('Label', className)} {...rest}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
