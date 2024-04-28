const TYPE = {
  visa: 0,
  master: 1,
};

const TYPE_PREFIXES = {
  [TYPE.visa]: ['4'],
  [TYPE.master]: ['51', '52', '53', '54', '55'],
};

const ISSUER = {
  BC: 0,
  SHINHAN: 1,
  KAKAO: 2,
  HYUNDAE: 3,
  WOORI: 4,
  LOTTE: 5,
  HANA: 6,
  KB: 7,
};

const ISSUER_NAME = {
  [ISSUER.BC]: 'BC카드',
  [ISSUER.SHINHAN]: '신한카드',
  [ISSUER.KAKAO]: '카카오카드',
  [ISSUER.HYUNDAE]: '현대카드',
  [ISSUER.WOORI]: '우리카드',
  [ISSUER.LOTTE]: '롯데카드',
  [ISSUER.HANA]: '하나카드',
  [ISSUER.KB]: '국민카드',
};

const CARD = {
  TYPE,
  TYPE_PREFIXES,
  ISSUER,
  ISSUER_NAME,
};

export default CARD;
