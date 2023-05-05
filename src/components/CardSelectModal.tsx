import React, { useState } from 'react';
import Modal from 'react-slinky-modal';

import { BANK_LIST } from '../utils/constants';
import BankIcon from './BankIcon';
import './CardSelectModal.css';

type modalProps = {
  determineCardType: React.Dispatch<React.SetStateAction<string>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardSelectModal = ({ determineCardType, closeModal }: modalProps) => {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Modal isModalOpen={isModalOpen} closeModal={setModalOpen}>
        <div className="icon-sort">
          {BANK_LIST.map((name) => (
            <BankIcon
              key={name}
              bankName={name}
              determineCardType={determineCardType}
              selectCardType={closeModal}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CardSelectModal;
