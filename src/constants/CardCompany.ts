import BCCard from '@Asset/cardCompany/BCCard.png';
import HanaCard from '@Asset/cardCompany/HanaCard.png';
import HyundaiCard from '@Asset/cardCompany/HyundaiCard.png';
import KBCard from '@Asset/cardCompany/KBCard.png';
import KakaoBank from '@Asset/cardCompany/KakaoBank.png';
import LotteCard from '@Asset/cardCompany/LotteCard.png';
import ShinhanCard from '@Asset/cardCompany/ShinhanCard.png';
import WooriCard from '@Asset/cardCompany/WooriCard.png';

const CARD_COMPANY = {
  BC: { name: 'BC카드', logo: BCCard },
  HANA: { name: '하나카드', logo: HanaCard },
  HYUNDAI: { name: '현대카드', logo: HyundaiCard },
  KB: { name: '국민카드', logo: KBCard },
  KAKAO: { name: '카카오뱅크', logo: KakaoBank },
  LOTTE: { name: '롯데카드', logo: LotteCard },
  SHINHAN: { name: '신한카드', logo: ShinhanCard },
  WOORI: { name: '우리카드', logo: WooriCard },
} as const;

export default CARD_COMPANY;
