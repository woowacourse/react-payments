import BCCard from '@Asset/cardCompany/BCCard.png';
import HanaCard from '@Asset/cardCompany/HanaCard.png';
import HyundaiCard from '@Asset/cardCompany/HyundaiCard.png';
import KBCard from '@Asset/cardCompany/KBCard.png';
import KakaoBank from '@Asset/cardCompany/KakaoBank.png';
import LotteCard from '@Asset/cardCompany/LotteCard.png';
import ShinhanCard from '@Asset/cardCompany/ShinhanCard.png';
import WooriCard from '@Asset/cardCompany/WooriCard.png';

const CARD_COMPANY = {
  bc: { name: 'BC카드', logo: BCCard, uniqueColor: '#F04651', gradientColor: '#e6636b', fontColor: '#FFFFFF' },
  shinhan: {
    name: '신한카드',
    logo: ShinhanCard,
    uniqueColor: '#0046FF',
    gradientColor: '#3066fc',
    fontColor: '#ffffff',
  },
  kakao: {
    name: '카카오뱅크',
    logo: KakaoBank,
    uniqueColor: '#FFE600',
    gradientColor: '#fcf07e',
    fontColor: '#281D20',
  },
  hyundai: {
    name: '현대카드',
    logo: HyundaiCard,
    uniqueColor: '#040404',
    gradientColor: '#3b3a3a',
    fontColor: '#ffffff',
  },
  woori: { name: '우리카드', logo: WooriCard, uniqueColor: '#027BC8', gradientColor: '#2497e0', fontColor: '#DEEDF6' },
  lotte: { name: '롯데카드', logo: LotteCard, uniqueColor: '#F03923', gradientColor: '#eb503d', fontColor: '#ffffff' },
  hana: { name: '하나카드', logo: HanaCard, uniqueColor: '#009490', gradientColor: '#1baba7', fontColor: '#ffffff' },
  kb: { name: '국민카드', logo: KBCard, uniqueColor: '#6E6559', gradientColor: '#7d7366', fontColor: '#FFCD05' },
} as const;

export default CARD_COMPANY;
