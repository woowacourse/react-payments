import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Card = ({ size, backgroundColor, boxShadow, children, ...props }) => {
  const cardClass = cx('Card', { [`Card--${size}`]: size }, { 'Card--shadow': boxShadow });

  return (
    <div className={cardClass} style={{ backgroundColor }} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'chip']),
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
