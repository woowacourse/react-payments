import { INPUT_LENGTH, INPUT_NAME } from '../constants/input';

export const isValidMultipleInput = (multipleInput, totalLength) => {
  return Object.values(multipleInput).every(
    multipleInput => multipleInput.length === totalLength && !isNaN(multipleInput)
  );
};

export const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate[INPUT_NAME.MONTH]);

  return 1 <= month && month <= 12 && cardExpiredDate[INPUT_NAME.MONTH].length === INPUT_LENGTH.EXPIRED_DATE;
};

export const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate[INPUT_NAME.YEAR]);

  return 0 <= year && cardExpiredDate[INPUT_NAME.YEAR].length === INPUT_LENGTH.EXPIRED_DATE;
};
