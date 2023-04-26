import { REGEX } from '../constants';

export const cardRegisterValidator = {
  cardNumber(input: string) {
    return REGEX.CARD_NUMBER.test(input);
  },

  month(input: string) {
    return REGEX.MONTH.test(input);
  },

  year(input: string) {
    return REGEX.YEAR.test(input);
  },

  username(input: string) {
    return REGEX.USERNAME.test(input);
  },

  code(input: string) {
    return REGEX.CODE.test(input);
  },

  cardPassword(input: string) {
    return REGEX.CARD_PASSWORD.test(input);
  },
};
