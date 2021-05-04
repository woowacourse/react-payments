/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Button = ({ className, type, children, ...rest }) => {
  return (
    <button className={cx(['Button', className])} type={type} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  type: 'submit',
};
