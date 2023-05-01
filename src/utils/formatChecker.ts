import { REGEX } from "../constants";

const checkNumberFormat = (input: string) => {
  return REGEX.ONLY_NUMBER.test(input);
};

const checkEnglishFormat = (input: string) => {
  return REGEX.ENGLISH_AND_WHITESPACE.test(input);
};

const checkExpirationDateFormat = (input: string) => {
  return REGEX.DATE_FORMAT.test(input);
};

const formatChecker = {
  expirationDate: checkExpirationDateFormat,
  ownerName: checkEnglishFormat,
  securityCode: checkNumberFormat,
  password: checkNumberFormat,
};

export default formatChecker;

export { checkNumberFormat };
