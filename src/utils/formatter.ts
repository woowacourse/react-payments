import { DATE_DIVIDER, REGEX } from '../constants';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH, EXPIRATION_DATE_UNIT_LENGTH } from '../constants/input';

const formatNumber = (input: string) => {
  return input.replace(REGEX.NON_NUMBER, '');
};

const formatSentence = (input: string) => {
  return input.trim();
};

const formatEnglishCapitalization = (input: string) => {
  return input.replace(/^[^a-zA-Z]+|[^a-zA-Z\s]+|[\s]{2,}/g, '').toUpperCase();
};

const formatExpirationDate = (input: string) => {
  const [month, year] = input.replace(DATE_DIVIDER, '').match(REGEX.TWO_CHAR_SEQUENCE) ?? [''];

  return { month, year };
};

const formatDisplayedExpirationDate = (input: string) => {
  const value = input.replace(REGEX.NON_NUMBER, '');
  const formattedValue =
    value.length > EXPIRATION_DATE_UNIT_LENGTH ? value.replace(REGEX.TWO_DIGIT, '$1/') : value;

  return formattedValue.slice(0, EXPIRATION_DATE_INPUT_MAX_LENGTH);
};

export {
  formatNumber,
  formatSentence,
  formatEnglishCapitalization,
  formatExpirationDate,
  formatDisplayedExpirationDate,
};
