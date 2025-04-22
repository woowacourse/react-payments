const PARSE_RULE = {
  length: 3,
} as const;

const CVC_RULE = {
  min: 0,
} as const;

const ERROR_MESSAGE = {
  CARD_CVC_LENGTH: 'CVC는 3자리입니다.',
} as const;

export { PARSE_RULE, CVC_RULE, ERROR_MESSAGE };
