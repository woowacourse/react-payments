export const DEFAULT_CARD_NUMBER_SEGMENTS = [4, 4, 4, 4];

export const CARD_NETWORKS = {
  DINERS: {
    prefixes: ['36'],
    length: 14,
    segments: [4, 6, 4],
  },
  AMEX: {
    prefixes: ['34', '37'],
    length: 15,
    segments: [4, 6, 5],
  },
  UNIONPAY: {
    ranges: [
      { from: 622126, to: 622925 },
      { from: 624, to: 626 },
      { from: 6282, to: 6288 },
    ],
    length: 16,
    segments: [4, 4, 4, 4],
  },
  VISA: {
    prefixes: ['4'],
    length: 16,
    segments: [4, 4, 4, 4],
  },
  MASTER: {
    prefixes: ['51', '52', '53', '54', '55'],
    length: 16,
    segments: [4, 4, 4, 4],
  },
} as const;

export const CARD_BRANDS: Record<string, { label: string; color: string }> = {
  BC:      { label: 'BC카드',     color: '#F04651' },
  SHINHAN: { label: '신한카드',   color: '#0046FF' },
  KAKAO:   { label: '카카오뱅크', color: '#FFE500' },
  HYUNDAI: { label: '현대카드',   color: '#000000' },
  WOORI:   { label: '우리카드',   color: '#007BC8' },
  LOTTE:   { label: '롯데카드',   color: '#ED1C24' },
  HANA:    { label: '하나카드',   color: '#009490' },
  KB:      { label: '국민카드',   color: '#6A6056' },
};
