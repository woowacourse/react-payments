import { BC, HANA, HYUNDAI, KAKAO, KB, LOTTE, SINHAN, WOORI } from '../assets/svgs';

export const CARD_COMPANY_INFO = [
  { NAME: '비씨카드', LOGO: BC, THEME: '#C03841' },
  { NAME: '신한카드', LOGO: SINHAN, THEME: '#0046FF' },
  { NAME: '카카오뱅크', LOGO: KAKAO, THEME: '#FFE600' },
  { NAME: '현대카드', LOGO: HYUNDAI, THEME: '#000000' },
  { NAME: '우리카드', LOGO: WOORI, THEME: '#007BC8' },
  { NAME: '롯데카드', LOGO: LOTTE, THEME: '#ED1C24' },
  { NAME: '하나카드', LOGO: HANA, THEME: '#009490' },
  { NAME: '국민카드', LOGO: KB, THEME: '#685E54' },
] as const;
