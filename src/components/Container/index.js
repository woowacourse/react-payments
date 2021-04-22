import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Container = ({ theme, width, height, children, ...props }) => {
  return (
    <div className={`Container Container--${theme}`} style={{ width, height }} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  theme: PropTypes.oneOf(['gray', 'transparent']),
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Container.defaultProps = {
  theme: 'gray',
  width: '100%',
  height: '2.8125rem',
  children: '',
};
