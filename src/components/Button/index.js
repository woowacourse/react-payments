/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Button = ({ type, theme, backgroundColor, children, ...props }) => {
  return (
    <button type={type} className={['Button', `Button--${theme}`].join(' ')} style={{ backgroundColor }} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  theme: PropTypes.oneOf(['submit', 'question-mark', 'card-company', 'backward']),
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'submit',
  theme: 'submit',
  backgroundColor: 'transparent',
  children: '',
  onClick: null,
};
