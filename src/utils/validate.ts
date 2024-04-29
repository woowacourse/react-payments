import { MAX_LENGTH } from '@/constants/cardSection';
import { RegisterFieldInfos, InitialCardNumberState } from '@/types';

const validate = {
  isNumberInRange: ({
    min,
    max,
    compareNumber,
  }: {
    min: number;
    max: number;
    compareNumber: number;
  }) => {
    return compareNumber >= min && compareNumber <= max;
  },

  isValidDigit: (value: string) => {
    return /^\d+$/.test(value);
  },

  isVisa: (value: string) => {
    return /\b4\d{15}\b/.test(value);
  },

  isMasterCard: (value: string) => {
    return /\b5[1-5]\d{14}\b/.test(value);
  },

  isEnglish: (value: string) => {
    return /^[a-zA-Z ]*$/.test(value);
  },

  isEmptyValue: (value: string) => {
    return value.length === 0;
  },

  isValidAllFormStates: ({ cardNumbers, month, year, cvc, password, name }: RegisterFieldInfos) => {
    const totalCardNumbers = cardNumbers
      .map((cardNumber: InitialCardNumberState) => cardNumber.value)
      .join('');

    if (
      month.length === MAX_LENGTH.MONTH &&
      year.length === MAX_LENGTH.YEAR &&
      totalCardNumbers.length === MAX_LENGTH.TOTAL_CARD_NUMBER &&
      cvc.length === MAX_LENGTH.CVC &&
      password.length === MAX_LENGTH.PASSWORD &&
      name.length
    ) {
      return true;
    }
    return false;
  },
};

export default validate;
