import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Input = ({ textAlign, width, color, ...props }) => {
  return <input className={`Input Input--${textAlign}`} style={{ width, color }} {...props} />;
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'text',
    'search',
    'url',
    'tel',
    'email',
    'date',
    'month',
    'week',
    'time',
    'datetime-local',
    'number',
    'range',
    'color',
    'password',
    'checkbox',
    'radio',
    'file',
    'submit',
  ]),
};

Input.defaultProps = {
  id: null,
  placeholder: '',
  width: '1.2rem',
  color: '#04C09E',
  textAlign: 'start',
  disabled: false,
  type: 'text',
};
