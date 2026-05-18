const COMPANY_SELECT_FIELD = [
  { value: "BC", label: "BC카드", issuerCode: "31" },
  { value: "SHINHAN", label: "신한카드", issuerCode: "41" },
  { value: "KAKAOBANK", label: "카카오뱅크", issuerCode: "15" },
  { value: "HYUNDAI", label: "현대카드", issuerCode: "61" },
  { value: "WOORI", label: "우리카드", issuerCode: "W1" },
  { value: "LOTTE", label: "롯데카드", issuerCode: "71" },
  { value: "HANA", label: "하나카드", issuerCode: "21" },
  { value: "KOOKMIN", label: "국민카드", issuerCode: "11" },
] as const;

const NUMBER_LENGTH_BY_BRAND = {
  Visa: 16,
  MasterCard: 16,
  UnionPay: 16,
  AMEX: 15,
  Diners: 14,
} as const;

const UNIT_LENGTHS_BY_BRAND = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  UnionPay: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  Diners: [4, 6, 4],
} as const;

const CARD = {
  COMPANY_SELECT_FIELD,
  NUMBER_LENGTH_BY_BRAND,
  UNIT_LENGTHS_BY_BRAND,
};

export type CardBrand = keyof typeof NUMBER_LENGTH_BY_BRAND;

export default CARD;
