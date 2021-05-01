import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';
import { COLOR } from '../../constants';

const cx = classnames.bind(styles);

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
  color: COLOR.NICKNAME_TEXT,
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  width: '100%',
  letterSpacing: '0%',
};
