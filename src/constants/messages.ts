import type {
  CardErrorType,
  DateErrorType,
  MonthErrorType,
  YearErrorType,
  CvcErrorType,
} from '../types/errorTypes';

export const CARD_ERROR_MESSAGE: CardErrorType = {
  notNumber: '숫자만 입력 가능합니다',
  notExistBrand: '존재하는 카드 브랜드 번호가 아닙니다.',
  cardNumberCount: '각 카드 번호 입력칸의 숫자는 4자리여야 합니다.',
};

export const DATE_ERROR_MESSAGE: DateErrorType = {
  emptyBoth: '월, 년도를 입력해주세요',
};

export const MONTH_ERROR_MESSAGE: MonthErrorType = {
  emptyMonth: '월을 입력해주세요',
  notMonthRange: '월 입력값은 1~12입니다.',
  notMonthNumber: '월은 숫자만 입력해주세요',
};

export const YEAR_ERROR_MESSAGE: YearErrorType = {
  notYearNumber: '숫자만 입력 가능합니다',
  emptyYear: '연도를 입력해주세요.',
};

export const CVC_ERROR_MESSAGE: CvcErrorType = {
  notNumber: '숫자만 입력 가능합니다',
  cvcCount: 'CVC 번호는 3자리여야 합니다.',
};
