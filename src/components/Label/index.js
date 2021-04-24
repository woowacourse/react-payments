/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Label = ({ children, ...props }) => {
  return (
    <label className="Label" {...props}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Label.defaultProps = {
  htmlFor: null,
  children: '',
};
