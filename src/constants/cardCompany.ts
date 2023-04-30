import hanaLogo from '../assets/hana-logo.svg';
import hyundaiLogo from '../assets/hyundai-logo.svg';
import kakaoLogo from '../assets/kakao-logo.svg';
import kbLogo from '../assets/kb-logo.svg';
import lotteLogo from '../assets/lotte-logo.svg';
import shinhanLogo from '../assets/shinhan-logo.svg';
import wooriLogo from '../assets/woori-logo.svg';
import bcLogo from '../assets/bc-logo.svg';
import type { CardCompany } from '../@types';

export const CARD_COMPANY = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '하나카드',
  '국민카드',
  '롯데카드',
] as const;

export const CARD_COMPANY_COLOR_MAP: Record<
  CardCompany | '',
  { main: string; secondary: string } | undefined
> = {
  '': undefined,
  BC카드: { main: 'rgb(222, 84, 86)', secondary: 'white' },
  신한카드: { main: 'rgb(19, 74, 245)', secondary: 'white' },
  카카오뱅크: { main: 'rgb(251, 230, 77)', secondary: 'black' },
  현대카드: { main: 'rgb(51, 51, 51)', secondary: 'white' },
  우리카드: { main: 'rgb(187, 223, 245)', secondary: 'rgb(51, 122, 194)' },
  롯데카드: { main: 'rgb(240, 240, 240)', secondary: 'rgb(225, 0, 0)' },
  하나카드: { main: 'rgb(64, 146, 143)', secondary: 'white' },
  국민카드: { main: 'rgb(85, 79, 71)', secondary: 'rgb(247, 206, 71)' },
};

export const CARD_COMPANY_LOGO: { name: CardCompany; logo: string }[] = [
  { name: 'BC카드', logo: bcLogo },
  { name: '신한카드', logo: shinhanLogo },
  { name: '카카오뱅크', logo: kakaoLogo },
  { name: '현대카드', logo: hyundaiLogo },
  { name: '우리카드', logo: wooriLogo },
  { name: '롯데카드', logo: lotteLogo },
  { name: '하나카드', logo: hanaLogo },
  { name: '국민카드', logo: kbLogo },
];
