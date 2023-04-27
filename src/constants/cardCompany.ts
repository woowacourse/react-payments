import { BC, HANA, HYUNDAI, KAKAO, KB, LOTTE, SINHAN, WOORI } from '../assets/svgs';

export const CARD_LOGO = [
  { LOGO: BC, NAME: '비씨카드' },
  { LOGO: HANA, NAME: '하나카드' },
  { LOGO: HYUNDAI, NAME: '현대카드' },
  { LOGO: KAKAO, NAME: '카카오뱅크' },
  { LOGO: KB, NAME: '국민카드' },
  { LOGO: LOTTE, NAME: '롯데카드' },
  { LOGO: SINHAN, NAME: '신한카드' },
  { LOGO: WOORI, NAME: '우리카드' },
] as const;

export const CARD_COMPANY_COLOR = {
  비씨카드: '#C03841',
  하나카드: '#009490',
  현대카드: '#000000',
  카카오뱅크카드: '#FFE600',
  국민카드: '#685E54',
  롯데카드: '#ED1C24',
  신한카드: '#0046FF',
  우리카드: '#007BC8',
} as const;
