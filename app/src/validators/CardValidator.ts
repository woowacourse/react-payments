export const Validator = {
  isNumber(value: string) {
    if (Number.isNaN(Number(value))) {
      throw new Error('숫자만 입력 가능합니다.');
    }
  },

  isValidNetworkBrand(value: string) {
    if (value !== '' && !['4', '5'].includes(value[0])) {
      throw new Error('유효한 카드 번호가 아닙니다. 카드 번호는 4 또는 5로 시작해야합니다.');
    }
    if (value.length === 2 && value[0] === '5' && !['1', '2', '3', '4', '5'].includes(value[1])) {
      throw new Error('마스터카드 번호는 51 ~ 55 사이 숫자로 시작해야 합니다.');
    }
  },

  detectNetworkBrand(value: string) {
    if (value.startsWith('4')) {
      return 'visa';
    }
    if (value.startsWith('5') && ['1', '2', '3', '4', '5'].includes(value[1])) {
      return 'master';
    }
    return '';
  },

  isValidCardNumberLength(value: string, limit: number) {
    if (![0, limit].includes(value.length)) {
      throw new Error('카드 번호 각 항목은 4자리여야 합니다.');
    }
  },

  isValidMonth(value: string) {
    if (value.length === 1 && !['0', '1'].includes(value[0])) {
      throw new Error('유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.');
    }
    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        throw new Error('유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.');
      }
    }
  },

  isValidYear(value: string) {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const year = value;
    if (year.length === 2 && Number(year) < Number(currentYear)) {
      throw new Error('유효기간이 만료된 연도입니다.');
    }
  },

  isValidCardExpiryDateLength(value: string, limit: number) {
    if (![0, limit].includes(value.length)) {
      throw new Error('날짜 각 항목은 2자리여야 합니다.');
    }
  },

  isValidCardCVCLength(value: string, limit: number) {
    if (![0, limit].includes(value.length)) {
      throw new Error('CVC는 3자리여야 합니다.');
    }
  },
};
