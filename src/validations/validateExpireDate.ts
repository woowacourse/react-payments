import { ValidateReturnType } from './validate.types';

import { ExpireDateInputKey } from '@/hooks/useExpireDateInput';

export const validateExpireDate = (value: string, key: ExpireDateInputKey): ValidateReturnType => {
  const expireDateRegex = new RegExp(`^\\d{2}$`);
  const currentYear = new Date().getFullYear() % 100;

  if (!expireDateRegex.test(value)) {
    return { isValid: false, errorMessage: '연도와 월은 두 자리 숫자를 입력하세요. 예시: 01, 12' };
  }

  if (key === 'month') {
    const isInvalidMonth = parseInt(value) < 1 || parseInt(value) > 12;

    if (isInvalidMonth) {
      return {
        isValid: false,
        errorMessage: '월을 잘못 입력했습니다. 1~12 사이의 숫자를 입력해주세요.',
      };
    }
  }

  if (key === 'year') {
    const isPastYear = parseInt(value) < currentYear;

    if (isPastYear) {
      return {
        isValid: false,
        errorMessage: `만료 년도는 현재 년도보다 낮을 수 없습니다. 현재 연도: ${currentYear}`,
      };
    }
  }

  return { isValid: true, errorMessage: null };
};
