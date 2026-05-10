import { InputFieldConfig } from '../types';

export const SELECT_FIELD_CONFIG = {
  CARD_ISSUER: {
    id: 'cardIssuer',
    sectionTitle: '카드사를 선택해 주세요',
    hintText: '현재 국내 카드사만 가능합니다',
    placeholder: '카드사를 선택해 주세요',
  },
} as const;

export const INPUT_FIELD_CONFIG = {
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
  PASSWORD: {
    id: 'passwordd',
    sectionTitle: '비밀번호를 입력해 주세요',
    hintText: '앞의 2자리를 입력해주세요',
    label: '비밀번호 앞 2자리',
    placeholder: ['**'],
    maxLength: 2,
  },
} satisfies Record<string, InputFieldConfig>;
