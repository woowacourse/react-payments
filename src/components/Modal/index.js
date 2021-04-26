import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Modal = ({ isOpen, className, children, ...props }) => {
  const modalClass = cx('Modal', { 'Modal--open': isOpen });
  const modalContentClass = cx('Modal__Content', className);

  return (
    <div className={modalClass} {...props}>
      <div className="Modal__ViewPort">
        <div className={modalContentClass}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
