import { STATE_KEY, CARD_INPUT } from "../constants";
import { isCardCompany } from "./cardCompany";

export const isAllNumberTextLengthCorrect = (numberText, length) => {
  if (numberText instanceof Object) {
    return Object.values(numberText).every((value) => value.length === length);
  }
  if (numberText instanceof Array) {
    return numberText.every((value) => value.length === length);
  }
};

// 이제 여기 Object 도 받을 수 있게 하거나 cardNumber 검사로 퉁쳐야함
export const isNumberText = (text) => {
  return !Number.isNaN(Number(text));
};

export const isCorrectCardNumber = (cardNumber) => {
  return (
    Object.values(cardNumber).every((value) => isNumberText(value)) &&
    isAllNumberTextLengthCorrect(cardNumber, CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)
  );
};

export const isCorrectCardExpiration = (cardExpiration) => {
  return (
    isAllNumberTextLengthCorrect(cardExpiration, CARD_INPUT.CARD_EXPIRATION_TEXT_LENGTH) &&
    cardExpiration.expirationMonth.match(/0[1-9]|1[0-2]/) &&
    cardExpiration.expirationYear.match(/2[0-9]/)
  );
};

export const isCorrectCardPassword = (cardPassword) => {
  return (
    cardPassword.length === CARD_INPUT.CARD_PASSWORD_LIST_LENGTH &&
    cardPassword.every((value) => typeof value === "string" && value.length === 1)
  );
};

export const isAllCardInputCorrect = (cardInput) => {
  return (
    isCardCompany(cardInput[STATE_KEY.CARD_COMPANY]) &&
    isCorrectCardNumber(cardInput[STATE_KEY.CARD_NUMBER]) &&
    isCorrectCardExpiration(cardInput[STATE_KEY.CARD_EXPIRATION]) &&
    cardInput[STATE_KEY.CARD_OWNER].length !== 0 &&
    cardInput[STATE_KEY.CARD_CVC].length === CARD_INPUT.CARD_CVC_TEXT_LENGTH &&
    isCorrectCardPassword(cardInput[STATE_KEY.CARD_PASSWORD])
  );
};

export const isSameCardNumber = (cardNumber, comparedCardNumber) => {
  return Object.values(cardNumber).join("") === Object.values(comparedCardNumber).join("");
};
