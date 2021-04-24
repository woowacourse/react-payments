import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Text = ({
  className,
  color,
  fontSize,
  textAlign,
  fontWeight,
  width,
  letterSpacing,
  children,
  ...props
}) => {
  const textClass = cx('Text', className);

  return (
    <span
      className={textClass}
      style={{ color, fontSize, textAlign, fontWeight, width, letterSpacing }}
      {...props}
    >
      {children}
    </span>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  fontWeight: PropTypes.string,
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  letterSpacing: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  color: '#575757',
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  width: '100%',
  letterSpacing: '0%',
};
