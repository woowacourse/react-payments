import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export const Heading = ({ as, className, style, children, ...rest }) => {
  switch (as) {
    case 'h1':
      return (
        <h1 className={cx('Heading', className)} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cx('Heading', className)} {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cx('Heading', className)} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cx('Heading', className)} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={cx('Heading', className)} {...rest}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={cx('Heading', className)} {...rest}>
          {children}
        </h6>
      );
    default:
      return (
        <h2 className={cx('Heading', className)} {...rest}>
          {children}
        </h2>
      );
  }
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wordSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    textIndent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  children: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  as: 'h2',
};
