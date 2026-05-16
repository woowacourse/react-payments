import type { GetCardsResponseDTO } from '@/services/apis/cards/dto';
import type { Card } from '@/pages/payments/cards/list/model';

export const mapCardsResponseDTOToModel = (cards: GetCardsResponseDTO): Card[] => {
  return cards.map((card) => {
    const [month, year] = card.expirationDate.split('/');
    return {
      id: card.id,
      card: card.issuerCode,
      cardNumbers: card.number,
      expirationDate: { month, year },
    };
  });
};
