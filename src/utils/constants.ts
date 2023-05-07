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
  EXCEPT_PAGE: '*',
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
  현대카드: 'linear-gradient(45deg, #333333, #999999)',
  카카오뱅크: 'linear-gradient(45deg, #Fdd900, #FFfd00)',
  BC카드: 'linear-gradient(45deg, #Fd4652, #fdaaaa)',
  신한카드: 'linear-gradient(45deg, #00464a, #0a44fa)',
  우리카드: 'linear-gradient(45deg, #027BC8, #96c786)',
  롯데카드: 'linear-gradient(60deg, #fD1a11, #a01300)',
  하나카드: 'linear-gradient(45deg, #00464a, #009490)',
  국민카드: 'linear-gradient(45deg, #6F655B, #555555)',
};

export const CARD_FONT_COLOR: Record<string, string> = {
  현대카드: '#FFFFFF',
  카카오뱅크: '#000000',
  BC카드: '#FFFFFF',
  신한카드: '#FFFFFF',
  우리카드: 'FFFFFF',
  롯데카드: '#FFFFFF',
  하나카드: '#ffffff',
  국민카드: '#FFFFFF',
};
