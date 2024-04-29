export const CARD_NUMBER_INDEXES = ['first', 'second', 'third', 'fourth'] as const;
export const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
export const CARD_COLOR = {
  '': '#333333',
  BC카드: '#f04651',
  신한카드: '#0046FF',
  카카오뱅크: ' #FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
} as const;

export const CARD_OPTIONS = [
  { value: 'BC카드', label: 'BC카드' },
  { value: '신한카드', label: '신한카드' },
  { value: '카카오뱅크', label: '카카오뱅크' },
  { value: '현대카드', label: '현대카드' },
  { value: '우리카드', label: '우리카드' },
  { value: '롯데카드', label: '롯데카드' },
  { value: '하나카드', label: '하나카드' },
  { value: '국민카드', label: '국민카드' },
] as const;
