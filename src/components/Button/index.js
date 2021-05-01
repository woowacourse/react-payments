/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import componentStyles from './style.css';

const cx = classnames.bind(componentStyles);

export const Button = ({ className, type, theme, backgroundColor, children, ...props }) => {
  const buttonClass = cx('Button', `Button--${theme}`);

  return (
    <button type={type} className={buttonClass} style={{ backgroundColor }} {...props}>
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
  onClick: undefined,
};
