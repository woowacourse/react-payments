const getRangeNumber = (min: number, max: number) => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

const toStringNumbers = (numbers: number[]) => {
  return numbers.map((number) => String(number));
};

export const BRAND_NUMBER = {
  visa: ['4'],
  mastercard: toStringNumbers(getRangeNumber(51, 55)),
  diners: ['36'],
  amex: ['34', '35'],
  union: [
    ...toStringNumbers(getRangeNumber(624, 626)),
    ...toStringNumbers(getRangeNumber(6282, 6288)),
    ...toStringNumbers(getRangeNumber(622126, 622925)),
  ],
};

export const CARD_OPTIONS = [
  { value: '', text: '카드사를 선택해주세요' },
  { value: 'bc', text: 'BC카드' },
  { value: 'shinhan', text: '신한카드' },
  { value: 'kakao', text: '카카오뱅크' },
  { value: 'hyundai', text: '현대카드' },
  { value: 'woori', text: '우리카드' },
  { value: 'lotte', text: '롯데카드' },
  { value: 'hana', text: '하나카드' },
  { value: 'kb', text: '국만카드' },
];
