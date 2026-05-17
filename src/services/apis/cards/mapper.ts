import type { GetCardsResponseDTO } from '@/services/apis/cards/dto';
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
