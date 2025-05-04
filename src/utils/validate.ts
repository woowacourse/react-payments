import { precise } from './precise';

export const ERROR_MESSAGE = {
  valid: '',
  notNumber: '숫자만 입력 가능합니다.',
  invalidMonth: '유효하지 않은 월 형식입니다. 유효 기간을 확인해주세요.',
  invalidDate: '유효하지 않은 카드입니다. 유효 기간을 확인해주세요.',
};

export const validate = {
  checkNumberInput: (value: string) => {
    return precise.isNumber(value)
      ? { isValid: true, message: ERROR_MESSAGE.valid }
      : { isValid: false, message: ERROR_MESSAGE.notNumber };
  },

  checkExpiryMonth: (month: string) => {
    if (!precise.isNumber(month)) {
      return { isValid: false, message: ERROR_MESSAGE.notNumber };
    }

    if (
      !precise.isValidNumberRange({
        value: Number(month),
        min: 1,
        max: 12,
      })
    ) {
      return {
        isValid: false,
        message: ERROR_MESSAGE.invalidMonth,
      };
    }

    return {
      isValid: true,
      message: '',
    };
  },

  checkExpiryDate: (month: string, year: string) => {
    if (precise.isExpiredDate({ month, year })) {
      return {
        isValid: false,
        message: ERROR_MESSAGE.invalidDate,
      };
    }

    return {
      isValid: true,
      message: '',
    };
  },

  combineValidity: (
    validity: boolean | boolean[] | Record<string, boolean>
  ) => {
    if (Array.isArray(validity)) {
      return validity.every((valid) => valid);
    }

    if (typeof validity === 'object') {
      return Object.values(validity).every((valid) => valid);
    }

    return validity;
  },
};
