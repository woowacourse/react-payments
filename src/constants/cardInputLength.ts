import { CreditCardAllValues } from "../@types/CreditCard";

const CARD_INPUT_LENGTH: Record<keyof CreditCardAllValues, number> = {
  firstValue: 4,
  secondValue: 4,
  thirdValue: 4,
  fourthValue: 4,

  month: 2,
  year: 2,

  name: 1,

  cvc: 3,

  password: 2,
};

export default CARD_INPUT_LENGTH;
