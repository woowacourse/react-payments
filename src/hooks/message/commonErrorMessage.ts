export const COMMON_ERROR_MESSAGE = {
  ONLY_NUMBER: '숫자만 입력 가능합니다',
  ONLY_NUMBER_WITH_LENGTH: (length: number) =>
    `${length}자리 숫자만 입력 가능합니다`,
  ONLY_NUMBER_WITH_LENGTH_MIN_MAX: (min: number, max: number) =>
    `${min}자리 ~ ${max}자리 숫자만 입력 가능합니다`,
  ONLY_NUMBER_WITH_RANGE: (min: number, max: number) =>
    `${min} ~ ${max} 사이의 숫자만 입력 가능합니다`,
};
