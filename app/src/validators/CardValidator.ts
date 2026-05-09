type ValidationResult = { valid: true } | { valid: false; message: string };

export const Validator = {
  isNumber(value: string): ValidationResult {
    const regex = /^\d*$/;
    if (!regex.test(value)) {
      return { valid: false, message: '숫자만 입력 가능합니다.' };
    }
    return { valid: true };
  },

  isValidCardNumberLength(value: string, index: number, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return {
        valid: false,
        message: `카드번호의 ${index + 1}번째 항목은 ${limit}자리여야 합니다.`,
      };
    }
    return { valid: true };
  },

  isValidMonth(value: string): ValidationResult {
    if (value.length === 1 && !['0', '1'].includes(value[0])) {
      return {
        valid: false,
        message: '유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.',
      };
    }
    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        return {
          valid: false,
          message: '유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.',
        };
      }
    }
    return { valid: true };
  },

  isValidYear(value: string): ValidationResult {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    if (value.length === 2 && Number(value) < Number(currentYear)) {
      return { valid: false, message: '유효기간이 만료된 연도입니다.' };
    }
    return { valid: true };
  },

  isValidCardExpiryDateLength(value: string, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return { valid: false, message: '날짜 각 항목은 2자리여야 합니다.' };
    }
    return { valid: true };
  },

  isValidCardExpiryDate(month: string, year: string): ValidationResult {
    const today = new Date();
    const currentYear = Number(new Date().getFullYear().toString().slice(-2));
    const currentMonth = Number(today.getMonth() + 1);

    if (currentYear === Number(year) && currentMonth > Number(month)) {
      return { valid: false, message: '유효기간이 만료된 날짜입니다.' };
    }
    return { valid: true };
  },

  isValidCardCVCLength(value: string, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return { valid: false, message: 'CVC는 3자리여야 합니다.' };
    }
    return { valid: true };
  },

  isValidPasswordLength(value: string, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return { valid: false, message: '비밀번호 앞 2자리를 입력해주세요.' };
    }
    return { valid: true };
  },
};
