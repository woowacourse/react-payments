import { ReactComponent as BC } from '../../assets/bc.svg';
import { ReactComponent as Shinhan } from '../../assets/shinhan.svg';
import { ReactComponent as Kakao } from '../../assets/kakao.svg';
import { ReactComponent as Hyundai } from '../../assets/hyundai.svg';
import { ReactComponent as Woori } from '../../assets/woori.svg';
import { ReactComponent as Lotte } from '../../assets/lotte.svg';
import { ReactComponent as Hana } from '../../assets/hana.svg';
import { ReactComponent as KB } from '../../assets/kb.svg';
import type { CardType } from '../types/card';
import type { HEX } from '../types/color';

export const MAIN_COLOR: Record<CardType, HEX> = {
  BC카드: '#E83F44',
  신한카드: '#0046FF',
  카카오카드: '#FFE300',
  현대카드: '#000000',
  우리카드: '#0283CA',
  롯데카드: '#E60013',
  하나카드: '#009692',
  국민카드: '#776C61',
};

export const BANK_LIST: { name: CardType; profile: JSX.Element }[] = [
  { name: 'BC카드', profile: <BC width={40} height={40} /> },
  { name: '신한카드', profile: <Shinhan width={40} height={40} /> },
  { name: '카카오카드', profile: <Kakao width={40} height={40} /> },
  { name: '현대카드', profile: <Hyundai width={40} height={40} /> },
  { name: '우리카드', profile: <Woori width={40} height={40} /> },
  { name: '롯데카드', profile: <Lotte width={40} height={40} /> },
  { name: '하나카드', profile: <Hana width={40} height={40} /> },
  { name: '국민카드', profile: <KB width={40} height={40} /> },
];
