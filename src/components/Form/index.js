import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Form = ({ className, children, ...props }) => {
  const formClass = cx('Form', className);

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
