import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Card = ({ className, hasShadow, children, ...rest }) => {
  return (
    <div className={cx('Card', { 'Card--shadow': hasShadow }, className)} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
