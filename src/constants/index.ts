import { InputFieldConfig } from '../types';

export const INPUT_FIELD_CONFIG: Record<string, InputFieldConfig> = {
  CARD_NUMBERS: {
    id: 'cardNumbers',
    sectionTitle: '결제할 카드 번호를 입력해 주세요',
    hintText: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
    placeholder: ['1234', '1234', '1234', '1234'],
    maxLength: 4,
  },
  EXPIRATION_DATE: {
    id: 'expirationDate',
    sectionTitle: '카드 유효기간을 입력해 주세요',
    hintText: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    label: '유효 기간',
    placeholder: ['MM', 'YY'],
    maxLength: 2,
  },
  CVC: {
    id: 'cvc',
    sectionTitle: 'CVC 번호를 입력해 주세요',
    label: 'CVC',
    placeholder: ['123'],
    maxLength: 3,
  },
} as const;

export const ERROR_MESSAGE = {
  INVALID_CARD_BRAND_NUMBER: '유효한 카드 브랜드 번호를 입력해주세요.',
  NAN: '숫자만 입력 가능합니다.',
  MAX_LENGTH: (length: number) => `숫자는 ${length}자리를 입력해야 합니다.`,
  INVALID_MONTH: '월은 1~12 사이의 숫자만 입력 가능합니다.',
  INVALID_YEAR: '년도는 현재 년도 이상만 입력 가능합니다.',
} as const;

export const CARD_BRAND = { VISA: 'VISA', MASTER_CARD: 'MASTER' } as const;

export const BRAND_ICON_MAP: Record<string, string> = {
  VISA: `${import.meta.env.BASE_URL}visa.svg`,
  MASTER: `${import.meta.env.BASE_URL}mastercard.svg`,
  NONE: '',
};

export const CARD_BRAND_RULE = {
  VISA: {
    PREFIX: '4',
  },
  MASTER_CARD: {
    PREFIX_MIN: 51,
    PREFIX_MAX: 55,
    PREFIX_LENGTH: 2,
  },
} as const;

export const VALIDATION_RULE = {
  CARD_NUMBERS_LENGTH: 4,
  EXPIRATION_DATE_LENGTH: 2,
  CVC_LENGTH: 3,
  MAX_MONTH: 12,
} as const;
