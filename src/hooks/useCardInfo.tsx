import { useRef, useState } from 'react';

import { matchCardIssuer } from '../domain/matchCardIssuer';

export type CardNumbers = [string, string, string, string];
export type CardIssuer = '' | 'Visa' | 'MasterCard';
export type CardExpiredDate = [string, string];
export interface CardInfo {
  cardNumbers: CardNumbers;
  cardIssuer: CardIssuer;
  cardExpiredDate: CardExpiredDate;
  cardHolder: string;
}

export default function useCardInfo() {
  const [cardNumbers, setCardNumbers] = useState<CardInfo['cardNumbers']>([
    '',
    '',
    '',
    '',
  ]);
  const cardIssuerRef = useRef<CardIssuer>('');
  const [cardExpiredDate, setCardExpiredDate] = useState<
    CardInfo['cardExpiredDate']
  >(['', '']);
  const [cardHolder, setCardHolder] = useState('');

  cardIssuerRef.current = matchCardIssuer(cardNumbers.join(''));

  const cardInfo: CardInfo = {
    cardNumbers,
    cardIssuer: cardIssuerRef.current,
    cardExpiredDate,
    cardHolder,
  };

  return {
    cardInfo,
    setCardNumbers,
    setCardExpiredDate,
    setCardHolder,
  };
}
