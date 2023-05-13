import React from 'react';
import Modal from 'react-slinky-modal';

import { BANK_LIST } from '../utils/constants';
import BankIcon from './BankIcon';
import './CardSelectModal.css';

type modalProps = {
  determineCardType: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardSelectModal = ({ determineCardType, isModalOpen, closeModal }: modalProps) => {
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="icon-sort">
        {BANK_LIST.map((name) => (
          <BankIcon
            key={name}
            bankName={name}
            determineCardType={determineCardType}
            iconClicked={closeModal}
          />
        ))}
      </div>
    </Modal>
  );
};

export default CardSelectModal;
