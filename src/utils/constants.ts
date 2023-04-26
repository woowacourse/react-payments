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
});
export const LOCAL_STORAGE_CARD_LIST = 'cardList';
export const SECURITY_MAX_NUMBER_LENGTH = 3;
export const NAME_INPUT_MAX_LENGTH = 30;

export const BANK_ICONS: Record<string, string> = {
  BC,
  kookmin,
  lotte,
  shinhan,
  woori,
  kakaobank,
  hana,
  hyundai,
};
