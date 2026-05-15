// 카드사 ID - 카카오, 하나, 신한, ...
export type CardCompanyId = (typeof CARD_COMPANIES)[number]['id'];

export const CARD_COMPANIES = [
  { id: 'bc', name: 'BC카드', color: '#f64655' },
  { id: 'shinhan', name: '신한카드', color: '#0046ff' },
  { id: 'kakaoBank', name: '카카오뱅크', color: '#ffe100' },
  { id: 'hyundai', name: '현대카드', color: '#000000' },
  { id: 'woori', name: '우리카드', color: '#1388c9' },
  { id: 'lotte', name: '롯데카드', color: '#f7192a' },
  { id: 'hana', name: '하나카드', color: '#0b9992' },
  { id: 'kbKookmin', name: '국민카드', color: '#6f665b' },
] as const;
