import type { GetCardsResponseDTO, PostCardsRequestDTO } from '@/services/apis/cards/dto';
import type { Card } from '@/pages/payments/cards/list/model';

import { ISSUER_CODE } from '@/pages/payments/cards/list/constants';

export const mapCardsResponseDTOToModel = (cards: GetCardsResponseDTO): Card[] => {
  return cards.map((card) => {
    const [month, year] = card.expirationDate.split('/');
    const issuerCodeCard = ISSUER_CODE?.[card.issuerCode as keyof typeof ISSUER_CODE]?.card;

    return {
      id: card.id,
      card: issuerCodeCard,
      cardNumbers: card.number,
      expirationDate: { month, year },
    };
  });
};

export const mapCardModelToRequestDTO = (card: {
  cardNumbers: { [key in '0' | '1' | '2' | '3']: string };
  card: string;
  cvc: string;
  expirationDate: { month: string; year: string };
}): PostCardsRequestDTO => {
  const issuerCode = Object.entries(ISSUER_CODE).find(([_, issuerCode]) => {
    return issuerCode?.card === card.card;
  });
  if (!issuerCode) throw new Error();
  const [issuerCodeKey] = issuerCode;

  return {
    number: Object.values(card.cardNumbers).join(''),
    expirationDate: `${card.expirationDate.month}/${card.expirationDate.year}`,
    cvc: card.cvc,
    issuerCode: issuerCodeKey,
  };
};
