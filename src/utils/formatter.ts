import { DATE_DIVIDER, REGEX, SECURITY_TEXT_ICON } from "../constants";
import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH,
  EXPIRATION_DATE_INPUT_MAX_LENGTH,
  EXPIRATION_DATE_UNIT_LENGTH,
} from "../constants/input";

const formatNumber = (input: string) => {
  return input.replace(REGEX.NON_NUMBER, "");
};

const formatSentence = (input: string) => {
  return input.trim();
};

const formatEnglishCapitalization = (input: string) => {
  return input.replace(/^[^a-zA-Z]+|[^a-zA-Z\s]+|[\s]{2,}/g, "").toUpperCase();
};

const formatExpirationDate = (input: string) => {
  const [month, year] = input
    .replace(DATE_DIVIDER, "")
    .match(REGEX.TWO_CHAR_SEQUENCE) ?? [""];

  return { month, year };
};

const formatDisplayedCardNumber = (input: string) => {
  return input
    .replace(REGEX.NON_NUMBER, "")
    .replace(REGEX.FOUR_NUMBER_SEQUENCE, "$1 ")
    .slice(0, CARD_NUMBER_INPUT_MAX_LENGTH)
    .trim();
};

const encryptDisplayedCardNumber = (input: string) => {
  return input.length > CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH
    ? input.slice(0, CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH) +
        input
          .slice(CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH)
          .replace(REGEX.NON_WHITESPACE_CHAR, SECURITY_TEXT_ICON)
    : input;
};

const formatDisplayedExpirationDate = (input: string) => {
  const value = input.replace(REGEX.NON_NUMBER, "");
  const formattedValue =
    value.length > EXPIRATION_DATE_UNIT_LENGTH
      ? value.replace(REGEX.TWO_DIGIT, "$1/")
      : value;

  return formattedValue.slice(0, EXPIRATION_DATE_INPUT_MAX_LENGTH);
};

export {
  formatNumber,
  formatSentence,
  formatEnglishCapitalization,
  formatExpirationDate,
  formatDisplayedExpirationDate,
  formatDisplayedCardNumber,
  encryptDisplayedCardNumber,
};
