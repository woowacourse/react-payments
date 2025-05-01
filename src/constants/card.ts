export const VISA_CARD_CONDITIONS = ['4'];
export const MASTER_CARD_CONDITIONS = ['51', '52', '53', '54', '55'];
export const MASKING = '·';

export const CARD_COMPANIES = [
  { id: 'bc', name: 'BC카드', color: '#E74C3C' },
  { id: 'shinhan', name: '신한카드', color: '#3498DB' },
  { id: 'kakao', name: '카카오뱅크', color: '#F1C40F' },
  { id: 'hyundai', name: '현대카드', color: '#2C3E50' },
  { id: 'woori', name: '우리카드', color: '#2980B9' },
  { id: 'lotte', name: '롯데카드', color: '#E74C3C' },
  { id: 'hana', name: '하나카드', color: '#16A085' },
  { id: 'kb', name: '국민카드', color: '#7F8C8D' },
] as const;
