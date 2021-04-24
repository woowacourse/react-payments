import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Modal = ({ isOpen, className, children, ...props }) => {
  const modalClass = cx('Modal', { 'Modal--open': isOpen });
  const modalInnerClass = cx('ModalInner', className);

  return (
    <div className={modalClass} {...props}>
      <div className={modalInnerClass}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
