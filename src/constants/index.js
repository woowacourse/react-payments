const CARD_RULE = {
  NUMBER_MAX_LENGTH: 16,
  OWNER_NAME_MAX_LENGTH: 30,
  CVC_LENGTH: 3,
  VALID_DATE_MAX_LENGTH: 4,
};

const CARD_COMPANY = [
  { name: '짱구 카드', color: '#E24141' },
  { name: '철수 카드', color: '#547CE4' },
  { name: '훈이 카드', color: '#73BC6D' },
  { name: '유리 카드', color: '#DE59B9' },
  { name: '맹구 카드', color: '#FBCD58' },
  { name: '수지 카드', color: '#E76E9A' },
  { name: '짱아 카드', color: '#8a604e' },
  { name: '흰둥 카드', color: '#FFFFFF' },
];

const date = new Date();

const NOW = {
  YEAR: date.getFullYear(),
  MONTH: String(date.getMonth() + 1).padStart(2, '0'),
};

export { CARD_RULE, CARD_COMPANY, NOW };
