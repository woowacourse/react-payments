import React from 'react';

import { BANK_LIST } from '../utils/constants';
import BankIcon from './BankIcon';
import './CardSelectModal.css';

type modalProps = {
  determineCardType: React.Dispatch<React.SetStateAction<string>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardSelectModal = ({ determineCardType, closeModal }: modalProps) => {
  return (
    <>
      <div className="card-select-modal-backdrop"></div>
      <div className="card-select-modal">
        {BANK_LIST.map((name) => (
          <BankIcon
            bankName={name}
            determineCardType={determineCardType}
            selectCardType={closeModal}
          />
        ))}
      </div>
    </>
  );
};

export default CardSelectModal;
