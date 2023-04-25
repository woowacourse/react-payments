import BCCard from '@Asset/cardCompany/BCCard.png';
import HanaCard from '@Asset/cardCompany/HanaCard.png';
import HyundaiCard from '@Asset/cardCompany/HyundaiCard.png';
import KBCard from '@Asset/cardCompany/KBCard.png';
import KakaoBank from '@Asset/cardCompany/KakaoBank.png';
import LotteCard from '@Asset/cardCompany/LotteCard.png';
import ShinhanCard from '@Asset/cardCompany/ShinhanCard.png';
import WooriCard from '@Asset/cardCompany/WooriCard.png';

const CARD_COMPANY = {
  bc: { name: 'BC카드', logo: BCCard, uniqueColor: '#f44454', fontColor: '#ffffff' },
  hana: { name: '하나카드', logo: HanaCard, uniqueColor: '#049494', fontColor: '#ffffff' },
  hyundai: { name: '현대카드', logo: HyundaiCard, uniqueColor: '#040404', fontColor: '#ffffff' },
  kb: { name: '국민카드', logo: KBCard, uniqueColor: '#62594f', fontColor: '#ffffff' },
  kakao: { name: '카카오뱅크', logo: KakaoBank, uniqueColor: '#fce404', fontColor: '#000000' },
  lotte: { name: '롯데카드', logo: LotteCard, uniqueColor: '#f1444a', fontColor: '#ffffff' },
  shinhan: { name: '신한카드', logo: ShinhanCard, uniqueColor: '#0444fc', fontColor: '#ffffff' },
  woori: { name: '우리카드', logo: WooriCard, uniqueColor: '#3093d2', fontColor: '#ffffff' },
} as const;

export default CARD_COMPANY;
