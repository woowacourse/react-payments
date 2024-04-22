export const FORM_REGEXP = {
  fourDigitNumber: /^[0-9]{4}$/,
  validMonth: /^(0[1-9]|1[0-2])$/,
  validUserName: /^[A-Z\s]{1,30}$/,
};

export const CARD_NUMBER_FORM = {
  maxInputLength: 4,

  errorMessage: {
    notAllValid: "모든 필드를 정확하게 입력해주세요.",
    fourDigits: "숫자 4자리를 입력해주세요.",
  },
} as const;

export const EXPIRATION_DATE_FORM = {
  maxInputLength: 2,
  startYear: 24,
  endYear: 29,

  errorMessage: {
    notAllValid: "만료 기한을 올바르게 입력해주세요.",
    invalidMonth: "01에서 12 사이의 숫자를 입력해주세요.",
    invalidYear: "24에서 29 사이의 숫자를 입력해주세요.",
  },
} as const;

export const USERNAME_FORM = {
  maxInputLength: 30,

  errorMessage: {
    notAllValid: "이름은 30자 이하의 영문 대문자여야 합니다.",
  },
} as const;
