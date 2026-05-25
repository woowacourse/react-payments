import { use, useState } from 'react';
import { ISSUER_CODE_TO_COMPANY } from '../constants';
import { getCardListDTO, deleteCard } from '../api/cards';
import type { CardDTO } from '../api/cards';
import type { CardCompany } from '../types';

export type Card = {
  id: string;
  company: CardCompany;
  number: [string, string, string, string];
  expirationDate: [string, string];
};

const toCard = (dto: CardDTO): Card => {
  const parts = dto.expirationDate.split('/');
  const [mm, yy]: [string, string] = parts.length === 2 ? [parts[0], parts[1]] : ['', ''];
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
    const target = cardList.find((card) => card.id === id);
    setCardList((list) => list.filter((card) => card.id !== id));

    try {
      await deleteCard(id);
    } catch (error) {
      if (target) setCardList((list) => [...list, target]);
      throw error;
    }
  };

  return { cardList, deleteCard: handleDeleteCard };
}
