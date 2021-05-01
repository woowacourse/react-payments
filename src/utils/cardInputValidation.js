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

export const isNumberText = (text) => {
  return !Number.isNaN(Number(text));
};

export const isAllCardInputCorrect = (cardInput) => {
  return (
    isCardCompany(cardInput[STATE_KEY.CARD_COMPANY]) &&
    isAllNumberTextLengthCorrect(
      cardInput[STATE_KEY.CARD_NUMBER],
      CARD_INPUT.CARD_NUMBER_TEXT_LENGTH
    ) &&
    isAllNumberTextLengthCorrect(
      cardInput[STATE_KEY.CARD_EXPIRATION],
      CARD_INPUT.CARD_EXPIRATION_TEXT_LENGTH
    ) &&
    cardInput[STATE_KEY.CARD_OWNER].length !== 0 &&
    cardInput[STATE_KEY.CARD_CVC].length === CARD_INPUT.CARD_CVC_TEXT_LENGTH &&
    cardInput[STATE_KEY.CARD_PASSWORD].length ===
      CARD_INPUT.CARD_PASSWORD_LIST_LENGTH &&
    cardInput[STATE_KEY.CARD_PASSWORD].every(
      (value) => typeof value === "string" && value.length === 1
    )
  );
};

export const isSameCardNumber = (cardNumber, comparedCardNumber) => {
  return (
    Object.values(cardNumber).join("") ===
    Object.values(comparedCardNumber).join("")
  );
};
