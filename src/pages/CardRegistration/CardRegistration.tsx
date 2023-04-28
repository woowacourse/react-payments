import { useContext, useState } from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import ArrowHeader from '../../components/ArrowHeader/ArrowHeader';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardCompanyModal from '../../components/CardCompanyModal/CardCompanyModal';
import { CardInfoContext } from '../../context/CardInfoContext';

const CardRegistration = () => {
  const { cardNumber, expirationDate, cardOwnerName, selectedCard } = useContext(CardInfoContext);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <CardCompanyModal onClose={handleCloseModal} />}
      <ArrowHeader />
      <CardPreview
        onClick={handleOpenModal}
        cardNumber={cardNumber}
        cardOwnerName={cardOwnerName}
        expirationDate={expirationDate}
        selectedCard={selectedCard}
      />
      <AddCardForm />
    </>
  );
};

export default CardRegistration;
