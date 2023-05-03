import {
  BC,
  HANA,
  HYUNDAI,
  KAKAO,
  KB,
  LOTTE,
  SINHAN,
  WOORI,
} from '../assets/svgs';

export const COMPANY_LIST = [
  { NAME: '비씨카드', SVG_LOGO_COMPONENT: BC, BACKGROUND_COLOR: '#C03841' },
  { NAME: '신한카드', SVG_LOGO_COMPONENT: SINHAN, BACKGROUND_COLOR: '#0046FF' },
  {
    NAME: '카카오뱅크',
    SVG_LOGO_COMPONENT: KAKAO,
    BACKGROUND_COLOR: '#FFE600',
  },
  {
    NAME: '현대카드',
    SVG_LOGO_COMPONENT: HYUNDAI,
    BACKGROUND_COLOR: '#000000',
  },
  { NAME: '우리카드', SVG_LOGO_COMPONENT: WOORI, BACKGROUND_COLOR: '#007BC8' },
  { NAME: '롯데카드', SVG_LOGO_COMPONENT: LOTTE, BACKGROUND_COLOR: '#ED1C24' },
  { NAME: '하나카드', SVG_LOGO_COMPONENT: HANA, BACKGROUND_COLOR: '#009490' },
  { NAME: '국민카드', SVG_LOGO_COMPONENT: KB, BACKGROUND_COLOR: '#685E54' },
] as const;
