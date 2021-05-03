/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';

export const BackwardIcon = ({ size, color, strokeWidth }) => {
  return (
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
  );
};

BackwardIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

BackwardIcon.defaultProps = {
  size: 16,
  strokeWidth: 1.5,
  color: '#525252',
};
