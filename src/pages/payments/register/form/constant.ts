const getRangeNumber = (min: number, max: number) => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

const toStringNumbers = (numbers: number[]) => {
  return numbers.map((number) => String(number));
};

export const BRAND_NUMBER = {
  visa: { startNumber: ['4'], length: 16, lengths: [4, 4, 4, 4] },
  mastercard: { startNumber: toStringNumbers(getRangeNumber(51, 55)), length: 16, lengths: [4, 4, 4, 4] },
  diners: { startNumber: ['36'], length: 14, lengths: [4, 6, 4] },
  amex: { startNumber: ['34', '37'], length: 15, lengths: [4, 6, 5] },
  union: {
    startNumber: [
      ...toStringNumbers(getRangeNumber(624, 626)),
      ...toStringNumbers(getRangeNumber(6282, 6288)),
      ...toStringNumbers(getRangeNumber(622126, 622925)),
    ],
    length: 16,
    lengths: [4, 4, 4, 4],
  },
};

export const CARD_OPTIONS = [
  { value: '', text: '카드사를 선택해주세요' },
  { value: 'BC', text: 'BC카드' },
  { value: 'SHINHAN', text: '신한카드' },
  { value: 'KAKAOBANK', text: '카카오뱅크' },
  { value: 'HYUNDAI', text: '현대카드' },
  { value: 'WOORI', text: '우리카드' },
  { value: 'LOTTE', text: '롯데카드' },
  { value: 'HANA', text: '하나카드' },
  { value: 'KOOKMIN', text: '국만카드' },
];
