export type Card = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const maskCardNumber = (number: string): string =>
  `${number.slice(0, 6)}******${number.slice(-4)}`;

const cards: Card[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    issuerCode: "31",
    number: maskCardNumber("5511123456789012"),
    expirationDate: "12/28",
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    issuerCode: "41",
    number: maskCardNumber("4111111111111111"),
    expirationDate: "12/28",
  },
];

export const cardStore = {
  getAll: (): Card[] => [...cards],

  add: (card: Omit<Card, "number"> & { rawNumber: string }): Card => {
    const newCard: Card = {
      id: card.id,
      issuerCode: card.issuerCode,
      number: maskCardNumber(card.rawNumber),
      expirationDate: card.expirationDate,
    };
    cards.push(newCard);
    return newCard;
  },

  remove: (id: string): void => {
    const index = cards.findIndex((c) => c.id === id);
    if (index !== -1) cards.splice(index, 1);
  },
};
