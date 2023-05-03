import BC_CARD from '@assets/bank/bc_card.png';
import HANA_CARD from '@assets/bank/hana_card.png';
import HYUNDAI_CARD from '@assets/bank/hyundai_card.png';
import KAKAO_BANK from '@assets/bank/kakao_bank.png';
import KB_CARD from '@assets/bank/kb_card.png';
import LOTTE_CARD from '@assets/bank/lotte_card.png';
import SHINHAN_CARD from '@assets/bank/shinhan_card.png';
import WOORI_CARD from '@assets/bank/woori_card.png';
import { type CardCompanyRecord } from '@type/card';

export const CARD_COMPANY = Object.freeze({
  DEFAULT: 'DEFAULT',
  BC: 'BC',
  SHINHAN: 'SHINHAN',
  KAKAO: 'KAKAO',
  HYUNDAI: 'HYUNDAI',
  WOORI: 'WOORI',
  LOTTE: 'LOTTE',
  HANA: 'HANA',
  KB: 'KB',
});

export const CARD_COMPANY_KIND = [
  CARD_COMPANY.BC,
  CARD_COMPANY.SHINHAN,
  CARD_COMPANY.KAKAO,
  CARD_COMPANY.HYUNDAI,
  CARD_COMPANY.WOORI,
  CARD_COMPANY.LOTTE,
  CARD_COMPANY.HANA,
  CARD_COMPANY.KB,
] as const;

export const CARD_COMPANY_DATA: CardCompanyRecord = {
  [CARD_COMPANY.DEFAULT]: {
    SOURCE: '',
    TITLE: '',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#333333',
  },
  [CARD_COMPANY.BC]: {
    SOURCE: BC_CARD,
    TITLE: 'BC카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#DE5356',
  },
  [CARD_COMPANY.SHINHAN]: {
    SOURCE: SHINHAN_CARD,
    TITLE: '신한카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#1B45F5',
  },
  [CARD_COMPANY.KAKAO]: {
    SOURCE: KAKAO_BANK,
    TITLE: '카카오뱅크',
    COLOR: '#333333',
    BACKGROUND_COLOR: '#FBE74D',
  },
  [CARD_COMPANY.HYUNDAI]: {
    SOURCE: HYUNDAI_CARD,
    TITLE: '현대카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#000000',
  },
  [CARD_COMPANY.WOORI]: {
    SOURCE: WOORI_CARD,
    TITLE: '우리카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#3579C2',
  },
  [CARD_COMPANY.LOTTE]: {
    SOURCE: LOTTE_CARD,
    TITLE: '롯데카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#DA3832',
  },
  [CARD_COMPANY.HANA]: {
    SOURCE: HANA_CARD,
    TITLE: '하나카드',
    COLOR: '#FFFFFF',
    BACKGROUND_COLOR: '#41928F',
  },
  [CARD_COMPANY.KB]: {
    SOURCE: KB_CARD,
    TITLE: '국민카드',
    COLOR: '#F7CF47',
    BACKGROUND_COLOR: '#6D655C',
  },
};
