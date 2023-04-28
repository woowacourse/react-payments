import { CardType } from "./types/card";

export const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split(" / ").map((each) => Number(each));
  if (month < 1 || month > 12) {
    return false;
  }

  const currentYear = new Date().getFullYear() % 2000;
  if (year < currentYear) {
    return false;
  }

  return true;
};

export const validateCardNumbers = (newCard: CardType, cards: CardType[]): boolean => {
  if (cards.length === 0) {
    return true;
  }

  if (cards.some((card) => card.numbers === newCard.numbers)) {
    return false;
  }

  return true;
};
