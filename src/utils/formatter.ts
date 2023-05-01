import {
  DATE_DIVIDER,
  EXPIRATION_DATE_INPUT_MAX_LENGTH,
  EXPIRATION_DATE_UNIT_LENGTH,
  REGEX,
} from "../constants";

const formatExpirationDate = (input: string) => {
  const [month, year] =
    input.replace(DATE_DIVIDER, "").match(REGEX.TWO_CHAR_SEQUENCE) ?? [];

  return { month, year };
};

const formatEnglishCapitalization = (input: string) => {
  return input.toUpperCase();
};

const formatter = {
  expirationDate: formatExpirationDate,
  ownerName: formatEnglishCapitalization,
};

export default formatter;

const formatDisplayedExpirationDate = (input: string) => {
  const value = input.replace(REGEX.NON_NUMBER, "");
  const formattedValue =
    value.length > EXPIRATION_DATE_UNIT_LENGTH
      ? value.replace(REGEX.TWO_DIGIT, "$1/")
      : value;

  return formattedValue.slice(0, EXPIRATION_DATE_INPUT_MAX_LENGTH);
};

export { formatDisplayedExpirationDate };
