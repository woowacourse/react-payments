import { useCallback, useState } from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import ArrowHeader from '../../components/ArrowHeader/ArrowHeader';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardCompanyModal from '../../components/CardCompanyModal/CardCompanyModal';
import { useCardStore } from '../../hook/useCardState';

const CardRegistration = () => {
  const { get } = useCardStore();
  const cardNumber = get().cardNumber;
  const expirationDate = get().expirationDate;
  const cardOwnerName = get().cardOwnerName;
  const selectedCard = get().selectedCard;
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
