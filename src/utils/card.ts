import { CardNumber } from "../types/card.type";

export const generateCardNumber = (cardNumber: CardNumber) =>
  Object.values(cardNumber).reduce((cardNumber, value) => cardNumber + value, "");
