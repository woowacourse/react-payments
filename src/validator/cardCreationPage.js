import { INPUT_LENGTH, INPUT_NAME } from '../constants/input';

const isValidInputType = input => {
  return input.constructor === Object;
};

export const isValidMultipleInput = (multipleInput, totalLength) => {
  try {
    if (!isValidInputType(multipleInput)) {
      throw new Error('multipleInput은 객체여야 합니다.');
    }

    return Object.values(multipleInput).every(
      multipleInput => multipleInput.length === totalLength && !isNaN(multipleInput)
    );
  } catch (error) {
    console.error(error);
  }
};

export const isValidExpiredDate = cardExpiredDate => {
  try {
    if (!isValidInputType(cardExpiredDate)) {
      throw new Error('cardExpiredDate는 객체여야 합니다.');
    }

    return isValidMonthInput(cardExpiredDate[INPUT_NAME.MONTH]) && isValidYearInput(cardExpiredDate[INPUT_NAME.YEAR]);
  } catch (error) {
    console.error(error);
  }
};

export const isValidMonthInput = month => {
  const monthAsNumber = Number(month);

  return 1 <= monthAsNumber && monthAsNumber <= 12 && month.length === INPUT_LENGTH.EXPIRED_DATE;
};

export const isValidYearInput = year => {
  const yearAsNumber = Number(year);

  return 0 <= yearAsNumber && year.length === INPUT_LENGTH.EXPIRED_DATE;
};
