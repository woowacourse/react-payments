import type { CardCompany } from '../context/CardContext';

export const CARD_COMPANY_INFO: Record<
  CardCompany,
  { label: string; english: string; color: string }
> = {
  bc: { label: 'BC카드', english: 'BC', color: '#F04651' },
  sinhan: { label: '신한카드', english: 'SHINHAN', color: '#0046FF' },
  kakao: { label: '카카오뱅크', english: 'KAKAOBANK', color: '#FFE600' },
  hyundai: { label: '현대카드', english: 'HYUNDAI', color: '#000000' },
  woori: { label: '우리카드', english: 'WOORI', color: '#007BC8' },
  lotte: { label: '롯데카드', english: 'LOTTE', color: '#ED1C24' },
  hana: { label: '하나카드', english: 'HANA', color: '#009490' },
  kookmin: { label: '국민카드', english: 'KOOKMIN', color: '#6A6056' },
  '': { label: '', english: '', color: '#333333' },
};
