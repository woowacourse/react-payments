import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Text = ({ className, style, children, ...rest }) => {
  return (
    <span className={cx('Text', className)} style={style} {...rest}>
      {children}
    </span>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wordSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    textIndent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  children: PropTypes.string.isRequired,
};
