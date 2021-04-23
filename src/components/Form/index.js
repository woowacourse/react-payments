import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Form = ({ children, ...props }) => {
  return (
    <form className="Form" {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Form.defaultProps = {};
