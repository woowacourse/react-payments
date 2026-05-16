export const mapCardsResponseDTOToModel = (cards) => {
  return cards.map((card) => {
    return {
      id: card.id,
      card: card.issuerCode,
      cardNumbers: card.number,
      expirationDate: card.expirationDate,
    };
  });
};
