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
      <CardItem className="mg-b-24 center-hoz-item" information={cardInformation} />
      <CardAddForm
        cardInformation={cardInformation}
        onSingleInputFieldChange={onSingleInputFieldChange}
        onMultipleInputFieldsChange={onMultipleInputFieldsChange}
        handleCardInformationSubmit={handleSubmit}
      />
    </>
  );
}

export default CardAddPage;
