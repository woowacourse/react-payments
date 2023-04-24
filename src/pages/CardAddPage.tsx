import { useContext } from 'react';
import Header from '../components/common/Header/Header';
import CardItem from '../components/CardItem/CardItem';
import CardAddForm from '../components/CardAddForm/CardAddForm';
import { useCardForm } from '../hooks/useCardForm';
import { PaymentsContext } from '../contexts/PaymentsContext';

function CardAddPage() {
  const { addCard } = useContext(PaymentsContext);
  const {
    cardInformation,
    cardValidation,
    onButtonInputChange,
    onSingleInputChange,
    onMultipleInputChange,
    handleSubmit,
  } = useCardForm(addCard);

  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <main>
        <CardItem
          className="mg-b-24 center-hoz-item"
          information={{
            issuer: cardInformation.issuer,
            cardNumber: cardInformation.cardNumber,
            expirationDate: cardInformation.expirationDate,
            ownerName: cardInformation.ownerName,
          }}
        />
        <CardAddForm
          cardInformation={cardInformation}
          cardValidation={cardValidation}
          onButtonInputChange={onButtonInputChange}
          onSingleInputChange={onSingleInputChange}
          onMultipleInputChange={onMultipleInputChange}
          handleCardInformationSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default CardAddPage;
