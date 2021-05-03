import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import componentStyles from './index.module.css';

const cx = classnames.bind(componentStyles);

export const Modal = ({ isOpen, className, children, ...props }) => {
  const modalClass = cx('Modal', { isOpen });
  const modalContentClass = cx('Modal__Content', className);
  const modalViewClass = cx('Modal__ViewPort');

  return (
    <div className={modalClass} {...props}>
      <div className={modalViewClass}>
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
