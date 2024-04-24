import {
  isOnlyDigit,
  isOnlyEnglishOrSpace,
  isSameLength,
  isValidMonth,
  isValidYear,
} from '../../domain/checkIsValid';

import { BOUND } from '../../constants/number';
import { ERROR_MESSAGE } from '../../constants/message';

const CardInfo = {
  cardHolder: {
    decorateValue: (string: string) => string.toUpperCase(),
    validatorPropsArray: [
      {
        checkIsValid: isOnlyEnglishOrSpace,
        errorMessage: ERROR_MESSAGE.notEnglishOrSpace,
      },
    ],
  },

  expiredDate: {
    month: {
      validatorPropsArray: [
        {
          checkIsValid: isValidMonth,
          errorMessage: ERROR_MESSAGE.wrongMonth,
        },
      ],
    },
    year: {
      validatorPropsArray: [
        {
          checkIsValid: isValidYear,
          errorMessage: ERROR_MESSAGE.wrongYear,
        },
      ],
    },
  },

  cardNumberPart: {
    validatorPropsArray: [
      {
        checkIsValid: isOnlyDigit,
        errorMessage: ERROR_MESSAGE.notDigit,
      },
      {
        checkIsValid: (string: string) =>
          isSameLength(string, BOUND.cardNumbersOnePartUpper),
        errorMessage: `${BOUND.cardNumbersOnePartUpper}${ERROR_MESSAGE.invalidLengthTail}`,
      },
    ],
  },
};

export default CardInfo;
