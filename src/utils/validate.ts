import { precise } from './precise';

export const validate = {
  checkNumberInput: (value: string) => {
    return precise.isNumber(value)
      ? { isValid: true, message: '' }
      : { isValid: false, message: '숫자만 입력 가능합니다.' };
  },

  checkExpiryMonth: (month: string) => {
    if (!precise.isNumber(month)) {
      return { isValid: false, message: '숫자만 입력 가능합니다.' };
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
        message: '유효하지 않은 월 형식입니다. 유효 기간을 확인해주세요.',
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
        message: '유효하지 않은 카드입니다. 유효 기간을 확인해주세요.',
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
