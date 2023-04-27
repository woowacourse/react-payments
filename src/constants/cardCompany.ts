import { BC, HANA, HYUNDAI, KAKAO, KB, LOTTE, SINHAN, WOORI } from '../assets/svgs';

export const CARD_COMPANY_INFO = {
  비씨카드: { LOGO: BC, COLOR: '#C03841' },
  하나카드: { LOGO: HANA, COLOR: '#009490' },
  현대카드: { LOGO: HYUNDAI, COLOR: '#000000' },
  카카오뱅크: { LOGO: KAKAO, COLOR: '#FFE600' },
  국민카드: { LOGO: KB, COLOR: '#685E54' },
  롯데카드: { LOGO: LOTTE, COLOR: '#ED1C24' },
  신한카드: { LOGO: SINHAN, COLOR: '#0046FF' },
  우리카드: { LOGO: WOORI, COLOR: '#007BC8' },
} as const;
