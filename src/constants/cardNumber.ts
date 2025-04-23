const PARSE_RULE = {
  length: 4,
} as const;

const CARD_NUMBER_RULE = {
  min: 0,
} as const;

const ERROR_MESSAGE = {
  CARD_NUMBER_LENGTH: '카드 번호는 16자리입니다.',
} as const;

export { PARSE_RULE, CARD_NUMBER_RULE, ERROR_MESSAGE };
