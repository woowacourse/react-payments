import { checkValideDate } from './checkValideDate';

type ExpiryField = 'month' | 'year';

interface ValidationResult {
  message: string;
  field: ExpiryField | null;
}

export const validateExpiry = (
  monthStr: string,
  yearStr: string,
  focueType: ExpiryField,
): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  const month = Number(monthStr);
  const year = Number(yearStr);
  const currentYear = Number(new Date().getFullYear().toString().slice(2));

  if (focueType === 'month') {
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
  }
  if (focueType === 'year') {
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
  }

  const invalidField = checkValideDate(monthStr, yearStr);
  if (invalidField) {
    return { message: INVALID_DATE_MSG, field: invalidField };
  }

  if (focueType === 'month') {
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
  }

  if (focueType === 'year') {
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
  }

  return { message: '', field: null };
};
