import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import componentStyles from './index.module.css';

const cx = classnames.bind(componentStyles);

export const Form = ({ className, children, ...props }) => {
  const formClass = cx('Form', `${className}`);

  return (
    <form className={formClass} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Form.defaultProps = {
  className: '',
};
