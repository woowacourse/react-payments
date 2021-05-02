import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import componentStyles from './index.module.css';
import { COLOR } from '../../constants';

const cx = classnames.bind(componentStyles);

export const Card = ({ size, backgroundColor, boxShadow, children, ...props }) => {
  const cardClass = cx('Card', `${size}`, { boxShadow });

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
  backgroundColor: COLOR.CARD_THEME,
  boxShadow: false,
  children: '',
};
