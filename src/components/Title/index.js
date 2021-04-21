import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Title = ({ color, fontSize, children, ...props }) => {
  return (
    <h2 className="title" style={{ color, fontSize }} {...props}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Title.defaultProps = {
  color: '#383838',
  fontSize: '1rem',
};
