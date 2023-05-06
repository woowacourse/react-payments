import bcCardBackground from './background_bc_card.png';
import hanaCardBackground from './background_hana_card.png';
import hyundaiCardBackground from './background_hyundai_card.png';
import lotteCardBackground from './background_lotte_card.png';
import wooriCardBackground from './background_woori_card.png';
import shinhanCardBackground from './background_shinhan_card.png';
import kakaoCardBackground from './background_kakao_bank_card.png';
import kbCardBackground from './background_kb_card.png';

const cardImages: Record<string, string> = {
  비씨카드: bcCardBackground,
  하나카드: hanaCardBackground,
  현대카드: hyundaiCardBackground,
  롯데카드: lotteCardBackground,
  우리카드: wooriCardBackground,
  신한카드: shinhanCardBackground,
  카카오뱅크: kakaoCardBackground,
  국민카드: kbCardBackground,
};

export default cardImages;
