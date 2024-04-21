import { useEffect, useState } from 'react';

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
  const [cardIssuer, setCardIssuer] = useState<CardInfo['cardIssuer']>('');
  const [cardExpiredDate, setCardExpiredDate] = useState<
    CardInfo['cardExpiredDate']
  >(['', '']);
  const [cardHolder, setCardHolder] = useState('');

  const cardInfo = {
    cardNumbers,
    cardIssuer,
    cardExpiredDate,
    cardHolder,
  };

  useEffect(() => {
    if (setCardIssuer)
      setCardIssuer(matchCardIssuer(cardNumbers.join('')) ?? '');
  }, [cardNumbers]);

  return {
    cardInfo,
    setCardNumbers,
    setCardExpiredDate,
    setCardHolder,
  };
}
