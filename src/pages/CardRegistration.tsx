import { useState } from 'react';
import AddCardForm from '../components/AddCardForm/AddCardForm';
import ArrowHeader from '../components/ArrowHeader/ArrowHeader';
import CardPreview from '../components/CardPreview/CardPreview';
import type { CardInfo } from '../types';
import CardCompanyModal from '../components/CardCompanyModal/CardCompanyModal';

type CardRegistrationProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const CardRegistration = ({ registerNewCard }: CardRegistrationProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const updateCardNumber = (newCardNumber: string) => {
    setCardNumber(newCardNumber);
  };

  const updateCardOwnerName = (newCardOwnerName: string) => {
    setCardOwnerName(newCardOwnerName);
  };

  const updateCardExpirationDate = (newCardExpirationDate: string) => {
    setCardExpirationDate(newCardExpirationDate);
  };

  return (
    <>
      {isModalOpen && <CardCompanyModal onClose={handleCloseModal} />}
      <ArrowHeader />
      <CardPreview
        onClick={handleOpenModal}
        cardNumber={cardNumber}
        cardOwnerName={cardOwnerName}
        cardExpirationDate={cardExpirationDate}
      />
      <AddCardForm
        updateCardNumber={updateCardNumber}
        updateExpirationDate={updateCardExpirationDate}
        updateCardOwnerName={updateCardOwnerName}
        registerNewCard={registerNewCard}
      />
    </>
  );
};

export default CardRegistration;
