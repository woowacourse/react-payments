import { precise } from './precise';

export const validate = {
  checkNumberInput: (value: string) => {
    return precise.isNumber(value)
      ? { isValid: true, message: '' }
      : { isValid: false, message: '숫자만 입력 가능합니다.' };
  },

  checkExpiryDate: (month: string, year: string) => {
    if (month.length !== 2 || year.length !== 2) {
      return {
        isValid: true,
        message: '',
        fields: { month: true, year: true },
      };
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
        fields: { month: false, year: true },
      };
    }

    if (!precise.isValidNumberRange({ value: Number(year), min: 25 })) {
      return {
        isValid: false,
        message: '유효하지 않은 년도입니다. 유효 기간을 확인해주세요.',
        fields: { month: true, year: false },
      };
    }

    if (!precise.hasNotExpired({ month, year })) {
      return {
        isValid: false,
        message: '유효하지 않은 카드입니다. 유효 기간을 확인해주세요.',
        fields: { month: false, year: false },
      };
    }

    return {
      isValid: true,
      message: '',
      fields: { month: true, year: true },
    };
  },
};
