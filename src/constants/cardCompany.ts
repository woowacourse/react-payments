import { BC, HANA, HYUNDAI, KAKAO, KB, LOTTE, SINHAN, WOORI } from '../assets/svgs';

export const CARD_COMPANY_INFO = {
  비씨카드: { LOGO: BC, COLOR: '#C03841' },
  신한카드: { LOGO: SINHAN, COLOR: '#0046FF' },
  카카오뱅크: { LOGO: KAKAO, COLOR: '#FFE600' },
  현대카드: { LOGO: HYUNDAI, COLOR: '#000000' },
  우리카드: { LOGO: WOORI, COLOR: '#007BC8' },
  롯데카드: { LOGO: LOTTE, COLOR: '#ED1C24' },
  하나카드: { LOGO: HANA, COLOR: '#009490' },
  국민카드: { LOGO: KB, COLOR: '#685E54' },
} as const;
