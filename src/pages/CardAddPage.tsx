import { Dispatch, SetStateAction, useState } from 'react';
import { Card } from '../types';
import Header from '../components/common/Header/Header';
import CardItem from '../components/CardItem/CardItem';
import CardAddForm from '../components/CardAddForm/CardAddForm';

interface CardAddPageProps {
  addCard: Dispatch<SetStateAction<Card[]>>;
}

const initialCardInformation: Card = {
  number: ['', '', '', ''],
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: ['', ''],
};

function CardAddPage({ addCard }: CardAddPageProps) {
  const [cardInformation, setCardInformation] = useState(initialCardInformation);

  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <CardItem className="mg-b-24" information={cardInformation} />
      <CardAddForm onChange={setCardInformation} onSubmit={addCard} />
    </>
  );
}

export default CardAddPage;
