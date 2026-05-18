import type { CardCompany } from '../context/CardContext';

export const CARD_COMPANY_INFO: Record<
  CardCompany,
  { label: string; issuerCode: string; color: string }
> = {
  bc: { label: 'BC카드', issuerCode: '31', color: '#F04651' },
  sinhan: { label: '신한카드', issuerCode: '41', color: '#0046FF' },
  kakao: { label: '카카오뱅크', issuerCode: '15', color: '#FFE600' },
  hyundai: { label: '현대카드', issuerCode: '61', color: '#000000' },
  woori: { label: '우리카드', issuerCode: 'W1', color: '#007BC8' },
  lotte: { label: '롯데카드', issuerCode: '71', color: '#ED1C24' },
  hana: { label: '하나카드', issuerCode: '21', color: '#009490' },
  kookmin: { label: '국민카드', issuerCode: '11', color: '#6A6056' },
  '': { label: '', issuerCode: '', color: '#333333' },
};
