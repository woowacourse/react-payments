import { CardCompany, CardInfo } from '../types/card';

interface CardMetaInfo {
  query: string;
  label: string;
  caption: string;
}

export const CARD_META_INFO: Record<keyof CardInfo, CardMetaInfo> = {
  cardNumbers: {
    query: '결제할 카드 번호를 입력해 주세요',
    label: '카드 번호',
    caption: '본인 명의의 카드만 결제 가능합니다.',
  },
  expirationDate: {
    query: '카드 유효기간을 입력해 주세요',
    label: '유효기간',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  },
  cardOwnerName: {
    query: '카드 소유자 이름을 입력해 주세요',
    label: '소유자 이름',
    caption: '',
  },
  cardCompany: {
    query: '카드사를 선택해 주세요',
    label: '',
    caption: '현재 국내 카드사만 가능합니다.',
  },
  cardCVCNumber: {
    query: 'CVC 번호를 입력해 주세요',
    label: 'CVC',
    caption: '',
  },
  cardPassword: {
    query: '비밀번호를 입력해 주세요',
    label: '앞의 2자리를 입력해 주세요.',
    caption: '비밀번호 앞 2자리',
  },
};

export const CARD_COMPANY_OPTIONS: CardCompany[] = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

// 질문으로 남긴 부분입니다.

// export const CARD_COMPANIES = [
//   'BC카드',
//   '신한카드',
//   '카카오뱅크',
//   '현대카드',
//   '우리카드',
//   '롯데카드',
//   '하나카드',
//   '국민카드',
// ] as const;

// export type CardCompany = (typeof CARD_COMPANIES)[number];

export const CARD_COLOR: Record<CardCompany, string> = {
  BC카드: '#f04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: '4자리의 숫자를 입력해 주세요.',
  onlyEnglishAllowed: '영문만 입력 가능합니다.',
  invalidDate: '유효하지 않은 MM/YY 형식입니다.',
  invalidOwnerName: '사용자 이름은 0 ~ 15자 사이의 영문이어야 합니다.',
  invalidCVCNumber: 'CVC 번호는 3자리의 숫자여야 합니다.',
  invalidPassword: '숫자 비밀번호 앞 2자리를 입력해 주세요.',
};

export const CARD_NUMBER = {
  visaStartNumber: 4,
  minMasterNumber: 51,
  maxMasterNumber: 55,
};

export const INPUT_RULES = {
  maxCardNumberPartLength: 4,
  maxExpirationDateLength: 2,
  maxCardOwnerNameLength: 15,
  maxCardCVCNumberLength: 3,
  maxCardPasswordLength: 2,
};

export const URL = {
  defaultPage: '/',
  submitPage: '/submit',
  errorPage: '/error',
};
