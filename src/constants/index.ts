export const PAGE_HEADER = Object.freeze({
  CARD_LIST: '보유카드',
  ADD_CARD: '카드 추가',
});

export const REGEX: {
  [key: string]: RegExp;
} = {
  CARD_NUMBER: /^\d{4}$/,
  MONTH: /^(1[0-2]|[1-9])$/,
  YEAR: /^\d{2}$/,
  USERNAME: /^[a-zA-Z가-힣]{0,30}$/,
  CODE: /^\d{3}$/,
  CARD_PASSWORD: /^\d{1}$/,
};

export const LOCAL_STORAGE_KEY: { [key: string]: string } = {
  CARD_LIST: 'cards',
};
