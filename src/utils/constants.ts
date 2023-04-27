import BC from '../asset/cards/BC.png';
import kookmin from '../asset/cards/국민.png';
import lotte from '../asset/cards/롯데.png';
import shinhan from '../asset/cards/신한.png';
import woori from '../asset/cards/우리.png';
import kakaobank from '../asset/cards/카뱅.png';
import hana from '../asset/cards/하나.png';
import hyundai from '../asset/cards/현대.png';

export const CVC_TOOLTIP_TITLE = 'CVC란?';
export const CVC_TOOLTIP_DETAIL = '카드 뒷면의 3자리 숫자입니다.';
export const LOCATION = Object.freeze({
  CARD_LIST_PAGE: '/',
  ADD_CARD_PAGE: '/add',
  CARD_NICKNAME_INPUT_PAGRE: '/nickname',
  PAGE_NOT_FOUND: '/404',
});
export const LOCAL_STORAGE_CARD_LIST = 'cardList';
export const SECURITY_MAX_NUMBER_LENGTH = 3;
export const NAME_INPUT_MAX_LENGTH = 30;

export const BANK_ICONS: Record<string, string> = {
  BC카드: BC,
  국민카드: kookmin,
  롯데카드: lotte,
  신한카드: shinhan,
  우리카드: woori,
  카카오뱅크: kakaobank,
  하나카드: hana,
  현대카드: hyundai,
};

export const BANK_LIST = [
  'BC카드',
  '국민카드',
  '롯데카드',
  '신한카드',
  '우리카드',
  '카카오뱅크',
  '하나카드',
  '현대카드',
];

export const CARD_BACKGROUND_COLORS: Record<string, string> = {
  현대카드: '#333333',
  카카오뱅크: '#FFE600',
  BC카드: '#F04652',
  신한카드: '#0046FF',
  우리카드: '#027BC8',
  롯데카드: '#ED1C23',
  하나카드: '#009490',
  국민카드: '#6F655B',
};

export const CARD_FONT_COLOR: Record<string, string> = {
  현대카드: '#FFFFFF',
  카카오뱅크: '#000000',
  BC카드: '#FFFFFF',
  신한카드: '#FFFFFF',
  우리카드: 'FFFFFF',
  롯데카드: '#FFFFFF',
  하나카드: '#000000',
  국민카드: '#FFFFFF',
};
