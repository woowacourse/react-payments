type ValidationResult = { valid: true } | { valid: false; message: string };

export const Validator = {
  isNumber(value: string): ValidationResult {
    if (Number.isNaN(Number(value))) {
      return { valid: false, message: '숫자만 입력 가능합니다.' };
    }
    return { valid: true };
  },

  detectNetworkBrand(value: string): 'visa' | 'master' | '' {
    if (value.startsWith('4')) {
      return 'visa';
    }
    if (value.startsWith('5') && ['1', '2', '3', '4', '5'].includes(value[1])) {
      return 'master';
    }
    return '';
  },

  isValidNetworkBrand(value: string): ValidationResult {
    if (value !== '' && !['4', '5'].includes(value[0])) {
      return { valid: false, message: '유효한 카드 번호가 아닙니다. 카드 번호는 4 또는 5로 시작해야합니다.' };
    }
    if (value.length === 2 && value[0] === '5' && this.detectNetworkBrand(value) === '') {
      return { valid: false, message: '마스터카드 번호는 51 ~ 55 사이 숫자로 시작해야 합니다.' };
    }
    return { valid: true };
  },

  isValidCardNumberLength(value: string, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return { valid: false, message: '카드 번호 각 항목은 4자리여야 합니다.' };
    }
    return { valid: true };
  },

  isValidMonth(value: string): ValidationResult {
    if (value.length === 1 && !['0', '1'].includes(value[0])) {
      return { valid: false, message: '유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.' };
    }
    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        return { valid: false, message: '유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.' };
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

  isValidCardCVCLength(value: string, limit: number): ValidationResult {
    if (![0, limit].includes(value.length)) {
      return { valid: false, message: 'CVC는 3자리여야 합니다.' };
    }
    return { valid: true };
  },
};
