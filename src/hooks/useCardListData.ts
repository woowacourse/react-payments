import { use, useState } from 'react';
import { CARD_COMPANY_OPTIONS } from '../constants';
import { getCardListDTO, deleteCard } from '../api/cards';

type CardCompany = (typeof CARD_COMPANY_OPTIONS)[number]['value'];

export type CardDTO = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export type Card = {
  id: string;
  company: CardCompany;
  number: [string, string, string, string];
  expirationDate: [string, string];
};

const ISSUER_CODE_TO_COMPANY: Record<string, CardCompany> = {
  '31': 'bc',
  '41': 'shinhan',
  '15': 'kakao',
  '61': 'hyundai',
  W1: 'woori',
  '71': 'lotte',
  '21': 'hana',
  '11': 'kookmin',
};

const toCard = (dto: CardDTO): Card => {
  const [mm, yy] = dto.expirationDate.split('/') as [string, string];
  const n = dto.number.replace(/\s/g, '');

  return {
    id: dto.id,
    company: ISSUER_CODE_TO_COMPANY[dto.issuerCode] ?? 'bc',
    number: [n.slice(0, 4), '****', '****', n.slice(-4)],
    expirationDate: [mm, yy],
  };
};

export const getCardList = (): Promise<Card[]> => getCardListDTO().then((dtos) => dtos.map(toCard));

export default function useCardListData(cardsPromise: Promise<Card[]>) {
  const initialCards = use(cardsPromise);
  const [cardList, setCardList] = useState(initialCards);

  const handleDeleteCard = async (id: string) => {
    const prev = cardList;
    setCardList((list) => list.filter((card) => card.id !== id));

    try {
      await deleteCard(id);
    } catch {
      setCardList(() => prev);
    }
  };

  return { cardList, deleteCard: handleDeleteCard };
}
