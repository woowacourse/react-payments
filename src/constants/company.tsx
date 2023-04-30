import * as Company from '../assets/images/company';

export const COMPANY = {
  BC: 'BC카드',
  SHINHAN: '신한카드',
  KAKAOBANK: '카카오뱅크',
  HYUNDAI: '현대카드',
  WOORI: '우리카드',
  LOTTE: '롯데카드',
  HANA: '하나카드',
  KB: '국민카드',
} as const;

export const COMPANY_NAMES = Object.values(COMPANY);

export type CompanyName = (typeof COMPANY_NAMES)[number];

export const isCompanyName = (name: string): name is CompanyName =>
  !!COMPANY_NAMES.find((companyName) => companyName === name);

export const COMPANY_INFO = {
  [COMPANY.BC]: {
    className: 'bc',
    icon: <Company.BCIcon width={37} height={37} />,
  },
  [COMPANY.SHINHAN]: {
    className: 'shinhan',
    icon: <Company.ShinhanIcon width={37} height={37} />,
  },
  [COMPANY.KAKAOBANK]: {
    className: 'kakaobank',
    icon: <Company.KakaoBankIcon width={37} height={37} />,
  },
  [COMPANY.HYUNDAI]: {
    className: 'hyundai',
    icon: <Company.HyundaiIcon width={37} height={37} />,
  },
  [COMPANY.WOORI]: {
    className: 'woori',
    icon: <Company.WooriIcon width={37} height={37} />,
  },
  [COMPANY.LOTTE]: {
    className: 'lotte',
    icon: <Company.LotteIcon width={37} height={37} />,
  },
  [COMPANY.HANA]: {
    className: 'hana',
    icon: <Company.HanaIcon width={37} height={37} />,
  },
  [COMPANY.KB]: {
    className: 'kb',
    icon: <Company.KBIcon width={37} height={37} />,
  },
} as const;
