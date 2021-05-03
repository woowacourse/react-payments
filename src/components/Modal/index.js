import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Modal = ({ isOpen, className, style, children, ...rest }) => {
  return (
    <div className={cx('Modal', { 'Modal--open': isOpen })} {...rest}>
      <div className="Modal__ViewPort">
        <div className={cx('Modal__Content', className)} style={style}>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node,
};
