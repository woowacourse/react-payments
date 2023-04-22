import { Dispatch, SetStateAction } from 'react';
import { Card } from '../types';
import Header from '../components/common/Header/Header';
import CardItem from '../components/CardItem/CardItem';
import CardAddForm from '../components/CardAddForm/CardAddForm';
import { useCardForm } from '../hooks/useCardForm';

interface CardAddPageProps {
  addCard: Dispatch<SetStateAction<Card[]>>;
}

function CardAddPage({ addCard }: CardAddPageProps) {
  const { cardInformation, onSingleInputFieldChange, onMultipleInputFieldsChange, handleSubmit } =
    useCardForm(addCard);

  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <main>
        <CardItem
          className="mg-b-24 center-hoz-item"
          information={{
            cardNumber: cardInformation.cardNumber,
            expirationDate: cardInformation.expirationDate,
            ownerName: cardInformation.ownerName,
          }}
        />
        <CardAddForm
          cardInformation={cardInformation}
          onSingleInputFieldChange={onSingleInputFieldChange}
          onMultipleInputFieldsChange={onMultipleInputFieldsChange}
          handleCardInformationSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default CardAddPage;
