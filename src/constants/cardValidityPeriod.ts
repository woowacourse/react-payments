const PARSE_RULE = {
  length: 2,
} as const;

const MONTH_RULE = {
  min: 1,
  max: 12,
  length: 2,
  currentMonth: new Date().getMonth() + 1,
} as const;

const YEAR_RULE = {
  length: 2,
  currentYear: new Date().getFullYear(),
} as const;

const ERROR_MESSAGE = {
  MONTH_LENGTH: `MM은 ${MONTH_RULE.length}자리여야 합니다.`,
  YEAR_LENGTH: `YY는 ${YEAR_RULE.length}자리여야 합니다.`,
  MONTH_RANGE: `MM은 ${MONTH_RULE.min}~${MONTH_RULE.max} 사이의 숫자여야 합니다.`,
  YEAR_RANGE: `YY는 현재 연도(${Number(
    YEAR_RULE.currentYear.toString().slice(YEAR_RULE.length),
  )})보다 크거나 같아야 합니다.`,
  SAME_YEAR_MONTH_RANGE: `MM은 현재 월(${MONTH_RULE.currentMonth})보다 크거나 같고 최대 월(${MONTH_RULE.max})보다 작거나 같아야 합니다.`,
} as const;

const YEAR_RANGE_TYPE_RULE = {
  same: 'same',
  less: 'less',
  greater: 'greater',
} as const;

export {
  PARSE_RULE,
  MONTH_RULE,
  YEAR_RULE,
  ERROR_MESSAGE,
  YEAR_RANGE_TYPE_RULE,
};
