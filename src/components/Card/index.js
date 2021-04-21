import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Card = ({ size, backgroundColor, boxShadow, children, ...props }) => {
  let classnames = `card card--${size}`;
  classnames += boxShadow ? ' card--shadow' : '';

  return (
    <div className={classnames} style={{ backgroundColor }} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Card.defaultProps = {
  size: 'small',
  backgroundColor: '#E5E5E5',
  boxShadow: false,
  children: '',
};
