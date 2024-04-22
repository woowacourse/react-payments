import { CardInfo } from '../types/card';

interface CardMetaInfo {
  query: string;
  label: string;
  caption: string;
}

export const CARD_META_INFO: Record<keyof CardInfo, CardMetaInfo> = {
  cardNumbers: {
    query: '결제할 카드 번호를 입력해 주세요.',
    label: '카드 번호',
    caption: '본인 명의의 카드만 결제 가능합니다.',
  },
  expirationDate: {
    query: '카드 유효기간을 입력해 주세요.',
    label: '유효기간',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  },
  cardOwnerName: {
    query: '카드 소유자 이름을 입력해 주세요.',
    label: '소유자 이름',
    caption: '',
  },
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: '4자리의 숫자를 입력해 주세요.',
  onlyEnglishAllowed: '영문만 입력 가능합니다.',
  invalidDate: '유효하지 않은 MM/YY 형식입니다.',
  invalidOwnerName: '사용자 이름은 0 ~ 15자 사이의 영문이어야 합니다.',
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
};
