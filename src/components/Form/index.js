import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ className, children, ...props }) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
