import { CardCompanyOption, CompanyDetail } from '../type/card';

const imgSrc: Record<CardCompanyOption, `/assets/${string}.svg`> = {
  BC카드: '/assets/bcCardLogo.svg',
  신한카드: '/assets/sinhanCardLogo.svg',
  카카오뱅크: '/assets/kakaocardLogo.svg',
  현대카드: '/assets/hyundaicardLogo.svg',
  우리카드: '/assets/wooricardLogo.svg',
  롯데카드: '/assets/lottecardLogo.svg',
  하나카드: '/assets/hanacardLogo.svg',
  국민카드: '/assets/kookmincardLogo.svg',
};

const CARD_COMPANY: { [key: string]: CompanyDetail } = {
  BC: { name: 'BC카드', color: '#F04652' },
  SINHAN: { name: '신한카드', color: '#0046FF' },
  KAKAO: { name: '카카오뱅크', color: '#FFE600' },
  HYUNDAI: { name: '현대카드', color: '#000000' },
  WOORI: { name: '우리카드', color: '#027BC8' },
  LOTTE: { name: '롯데카드', color: '#ED1C25' },
  HANA: { name: '하나카드', color: '#009490' },
  KOOKMIN: { name: '국민카드', color: '#564F46' },
};

export { imgSrc, CARD_COMPANY };
