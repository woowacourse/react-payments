import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH,
  DATE_DIVIDER,
  EXPIRATION_DATE_INPUT_MAX_LENGTH,
  EXPIRATION_DATE_UNIT_LENGTH,
  REGEX,
  SECURITY_TEXT_ICON,
} from '../constants';

const formatCardNumber = (input: string) => {
  return input.replace(REGEX.NON_NUMBER, '');
};

const formatExpirationDate = (input: string) => {
  const [month, year] = input.replace(DATE_DIVIDER, '').match(REGEX.TWO_CHAR_SEQUENCE) ?? [];

  return { month, year };
};

const formatEnglishCapitalization = (input: string) => {
  return input.toUpperCase();
};

const formatter = {
  cardNumber: formatCardNumber,
  expirationDate: formatExpirationDate,
  ownerName: formatEnglishCapitalization,
};

export default formatter;

const formatDisplayedCardNumber = (input: string) => {
  return input
    .replace(REGEX.FOUR_NUMBER_SEQUENCE, '$1 ')
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
  const value = input.replace(REGEX.NON_NUMBER, '');
  const formattedValue =
    value.length > EXPIRATION_DATE_UNIT_LENGTH ? value.replace(REGEX.TWO_DIGIT, '$1/') : value;

  return formattedValue.slice(0, EXPIRATION_DATE_INPUT_MAX_LENGTH);
};

export { formatDisplayedExpirationDate, formatDisplayedCardNumber, encryptDisplayedCardNumber };
