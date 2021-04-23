import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Text = ({
  color,
  fontSize,
  textAlign,
  fontWeight,
  width,
  letterSpacing,
  children,
  ...props
}) => {
  return (
    <span
      className="Text"
      style={{ color, fontSize, textAlign, fontWeight, width, letterSpacing }}
      {...props}
    >
      {children}
    </span>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  fontWeight: PropTypes.string,
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  letterSpacing: PropTypes.string,
};

Text.defaultProps = {
  color: '#575757',
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  width: '100%',
  letterSpacing: '0%',
};
