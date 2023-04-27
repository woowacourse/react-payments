export const PAGE_HEADER = {
  CARD_LIST: '보유카드',
  ADD_CARD: '카드 추가',
} as const;

export const REGEX: {
  [key: string]: RegExp;
} = {
  CARD_NUMBER: /^\d{4}$/,
  MONTH: /^(1[0-2]|[1-9])$/,
  YEAR: /^\d{2}$/,
  USERNAME: /^[a-zA-Z가-힣]{0,30}$/,
  CODE: /^\d{3}$/,
  CARD_PASSWORD: /^\d{1}$/,
} as const;

export const LOCAL_STORAGE_KEY: { [key: string]: string } = {
  CARD_LIST: 'cards',
} as const;

export const CARD_COMPANY: { [key: string]: string } = {
  BC: 'BC카드',
  SINHAN: '신한카드',
  KAKAO: '카카오뱅크',
  HYUNDAI: '현대카드',
  WOORI: '우리카드',
  LOTTE: '롯데카드',
  HANA: '하나카드',
  KOOKMIN: '국민카드',
} as const;
