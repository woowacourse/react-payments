import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Card } from '..';
import styles from './style.css';

const cx = classNames.bind(styles);

export const CreditCardPreview = (props) => {
  const { className, companyColor, companyName, cardNumber, ownerName, expirationDate } = props;
  return (
    <div className={cx('CreditCardPreview', className)}>
      <Card style={{ backgroundColor: companyColor }} hasShadow>
        <div className="CreditCardPreview__Wrapper">
          <span className="CreditCardPreview__CardCompany"> {companyName}</span>
          <Card className="CreditCardPreview__IC_Chip" />
          <span className="CreditCardPreview__CardNumber"> {cardNumber}</span>
          <div className="CreditCardPreview__Line">
            <span className="CreditCardPreview__OwnerName"> {ownerName}</span>
            <span className="CreditCardPreview__ExpirationDate"> {expirationDate}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

CreditCardPreview.propTypes = {
  className: PropTypes.string,
  companyColor: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
};
