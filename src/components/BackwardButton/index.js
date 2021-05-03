/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Button } from '../Button';
import styles from './style.css';

const cx = classNames.bind(styles);

export const BackwardButton = ({ className, size, color, strokeWidth }) => {
  return (
    <Button className={cx(['BackwardButton', className])}>
      <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size} fill="none">
        <path
          d={`
              M ${size / 2} 1 
              L 1 ${size / 2} 
              L ${size / 2} ${size}`}
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>
    </Button>
  );
};

BackwardButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

BackwardButton.defaultProps = {
  size: 16,
  strokeWidth: 1.5,
  color: '#525252',
};
