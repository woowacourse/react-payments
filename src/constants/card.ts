const COMPANY_SELECT_FIELD = [
  { value: "BC", label: "BC카드" },
  { value: "sinhan", label: "신한카드" },
  { value: "kakaobank", label: "카카오뱅크" },
  { value: "hyundai", label: "현대카드" },
  { value: "woori", label: "우리카드" },
  { value: "lotte", label: "롯데카드" },
  { value: "hana", label: "하나카드" },
  { value: "kookmin", label: "국민카드" },
] as const;

const NUMBER_LENGTH_BY_BRAND = {
  Visa: 16,
  MasterCard: 16,
  UnionPay: 16,
  AMEX: 15,
  Diners: 14,
} as const;

const CARD = {
  COMPANY_SELECT_FIELD,
  NUMBER_LENGTH_BY_BRAND,
};

export type CardBrand = keyof typeof NUMBER_LENGTH_BY_BRAND;

export default CARD;
