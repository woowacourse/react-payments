import React from 'react';

import { BANK_ICONS } from '../utils/constants';

type bankIconProps = {
  bankName: string;
  determineCardType: React.Dispatch<React.SetStateAction<string>>;
  selectCardType: React.Dispatch<React.SetStateAction<boolean>>;
};

const BankIcon = ({ bankName, determineCardType, selectCardType }: bankIconProps) => {
  return (
    <div
      className="card-icon"
      onClick={() => {
        determineCardType(bankName);
        selectCardType(false);
      }}
    >
      <img src={BANK_ICONS[bankName]} alt={bankName} className="bank-icon" />
      <div>{bankName}</div>
    </div>
  );
};

export default BankIcon;
