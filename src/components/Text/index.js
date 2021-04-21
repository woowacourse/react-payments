import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Text = ({ color, fontSize, textAlign, width, children, ...props }) => {
  return (
    <span className="text" style={{ color, fontSize, textAlign, width }} {...props}>
      {children}
    </span>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Text.defaultProps = {
  color: '#575757',
  fontSize: '1rem',
  textAlign: 'center',
  width: '100%',
};
