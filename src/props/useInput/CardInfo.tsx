import {
  isOnlyDigit,
  isOnlyEnglishOrSpace,
  isUpperLength,
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
        shouldReflect: false,
        errorMessage: ERROR_MESSAGE.notEnglishOrSpace,
      },
    ],
    maxLength: BOUND.cardHolderLengthUpper,
  },

  expiredDate: {
    month: {
      validatorPropsArray: [
        {
          checkIsValid: isValidMonth,
          shouldReflect: false,
          errorMessage: ERROR_MESSAGE.wrongMonth,
        },
      ],
      maxLength: BOUND.cardExpiredMonthStringUpper,
    },
    year: {
      validatorPropsArray: [
        {
          checkIsValid: isValidYear,
          shouldReflect: false,
          errorMessage: ERROR_MESSAGE.wrongYear,
        },
      ],
      maxLength: BOUND.cardExpiredYearStringUpper,
    },
  },

  cardNumberPart: {
    validatorPropsArray: [
      {
        checkIsValid: isOnlyDigit,
        shouldReflect: false,
        errorMessage: ERROR_MESSAGE.notDigit,
      },
      {
        checkIsValid: (string: string) =>
          isUpperLength(string, BOUND.cardNumbersOnePartUpper),
        shouldReflect: true,
        errorMessage: `${BOUND.cardNumbersOnePartUpper}${ERROR_MESSAGE.invalidLengthTail}`,
      },
    ],
  },
};

export default CardInfo;
