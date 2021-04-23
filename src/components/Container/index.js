import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Container = ({ classname, width, height, children, ...props }) => {
  return (
    <div className={`Container ${classname}`} style={{ width, height }} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  classname: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Container.defaultProps = {
  classname: '',
  width: '100%',
  height: '2.8125rem',
  children: '',
};
