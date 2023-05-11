import React from 'react';

import { BANK_ICONS } from '../utils/constants';

type BankIconProps = {
  bankName: string;
  determineCardType: React.Dispatch<React.SetStateAction<string>>;
  iconClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const BankIcon = ({ bankName, determineCardType, iconClicked }: BankIconProps) => {
  return (
    <div
      className="card-icon"
      onClick={() => {
        determineCardType(bankName);
        iconClicked(false);
      }}
    >
      <img src={BANK_ICONS[bankName]} alt={bankName} className="bank-icon" />
      <div>{bankName}</div>
    </div>
  );
};

export default BankIcon;
