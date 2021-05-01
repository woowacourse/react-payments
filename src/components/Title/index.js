import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { COLOR } from '../../constants';

export const Title = ({ color, fontSize, children, ...props }) => {
  return (
    <h2 className="Title" style={{ color, fontSize }} {...props}>
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
  color: COLOR.TITLE_TEXT,
  fontSize: '1rem',
};
