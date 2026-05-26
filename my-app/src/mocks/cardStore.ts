import type { CardListItem } from "../apis/cards";

type StoredCard = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const cards = new Map<string, StoredCard>();

const maskNumber = (number: string) => `${number.slice(0, 6)}******${number.slice(-4)}`;

export const store = {
  list: (): CardListItem[] =>
    [...cards.values()].map((card) => ({ ...card, number: maskNumber(card.number) })),

  add: (card: Omit<StoredCard, "id">): string => {
    const id = crypto.randomUUID();
    cards.set(id, { id, ...card });
    return id;
  },

  remove: (id: string) => {
    cards.delete(id);
  },

  reset: () => {
    cards.clear();
  },
};
