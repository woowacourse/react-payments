const PARSE_RULE = {
  length: 2,
} as const;

const CARD_PASSWORD_RULE = {
  min: 0,
} as const;

const ERROR_MESSAGE = {
  CARD_PASSWORD_LENGTH: '카드 비밀번호는 2자리입니다.',
} as const;

export { PARSE_RULE, CARD_PASSWORD_RULE, ERROR_MESSAGE };
