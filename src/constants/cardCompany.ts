import BCCard from '../image/BC-card.svg';
import ShinhanCard from '../image/Shinhan-card.svg';
import KakaoCard from '../image/Kakao-card.svg';
import HyendaiCard from '../image/Hyendai-card.svg';
import WooriCard from '../image/Woori-card.svg';
import LotteCard from '../image/Lotte-card.svg';
import HanaCard from '../image/Hana-card.svg';
import KookminCard from '../image/Kookmin-card.svg';

export const COMPANIES = {
  BC: {
    img: BCCard,
    name: 'BC카드',
    color: '#F04652',
  },
  SHINHAN: {
    img: ShinhanCard,
    name: '신한카드',
    color: '#0046FF',
  },
  KAKAO: {
    img: KakaoCard,
    name: '카카오뱅크',
    color: '#FFE600',
  },
  HYENDAI: {
    img: HyendaiCard,
    name: '현대카드',
    color: '#333',
  },
  WOORI: {
    img: WooriCard,
    name: '우리카드',
    color: '#027BC8',
  },
  LOTTE: {
    img: LotteCard,
    name: '롯데카드',
    color: '#ED1C23',
  },
  HANA: {
    img: HanaCard,
    name: '하나카드',
    color: '#009490',
  },
  KOOKMIN: {
    img: KookminCard,
    name: '국민카드',
    color: '#6F655B',
  },
} as const;
