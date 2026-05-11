export const CARD_PASSWORD_LENGTH = 2;

export const CARD_EXPIRY_MONTH_LENGTH = 2;

export const CARD_EXPIRY_MONTH_RANGE = Array.from({ length: 12 }).map((_, index) => String(index + 1).padStart(2, "0"));

export const CARD_EXPIRY_YEAR_LENGTH = 2;

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];

export const DEFAULT_CARD_VALIDATION_CODE_LENGTH = 3;

export const DEFAULT_CARD_NUMBER_LENGTH = 16;

export const DEFAULT_CARD_NUMBER_SEGMENT_LENGTH = 4;

export const UNMASKED_CARD_NUMBER_SEGMENT_COUNT = 2;

export const CARD_ISSUER = {
  bc: { label: "BC카드" },
  shinhan: { label: "신한카드" },
  kakao: { label: "카카오뱅크" },
  hyundai: { label: "현대카드" },
  woori: { label: "우리카드" },
  lotte: { label: "롯데카드" },
  hana: { label: "하나카드" },
  kookmin: { label: "국민카드" },
} as const

export const CARD_NETWORK = {
  "VISA": {
    startPatterns: [{
      regex: /^4/,
      minMatchLength: 1,
    }],
    cardValidationCodeLength: 3,
    cardNumberFormat: [4, 4, 4, 4],
    cardNumberLength: 16,
  },
  "MasterCard": {
    startPatterns: [{
      regex: /^(51|52|53|54|55)/,
      minMatchLength: 2,
    }],
    cardValidationCodeLength: 3,
    cardNumberFormat: [4, 4, 4, 4],
    cardNumberLength: 16,
  },
  "Diners": {
    startPatterns: [{
      regex: /^36/,
      minMatchLength: 2,
    }],
    cardValidationCodeLength: 3,
    cardNumberFormat: [4, 6, 4],
    cardNumberLength: 14,
  },
  "AMEX": {
    startPatterns: [{
      regex: /^(34|37)/,
      minMatchLength: 2,
    }],
    cardValidationCodeLength: 4,
    cardNumberFormat: [4, 6, 5],
    cardNumberLength: 15,
  },
  "UnionPay": {
    startPatterns: [
      {
        regex: /^(62[4-6])/,
        minMatchLength: 3,
      }, {
        regex: /^(628[2-8])/,
        minMatchLength: 4,
      }, {
        regex: /^(62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5])/,
        minMatchLength: 6,
      }
    ],
    cardValidationCodeLength: 3,
    cardNumberFormat: [4, 4, 4, 4],
    cardNumberLength: 16,
  }
} as const