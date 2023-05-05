import BcCardIcon from '../asset/bc_card.png';
import HanaCardIcon from '../asset/hana_card.png';
import HyundaiCardIcon from '../asset/hyundai_card.png';
import KakaoBankIcon from '../asset/kakao_bank.png';
import KookminCardIcon from '../asset/kookmin_card.png';
import LotteCardIcon from '../asset/lotte_card.png';
import SinhanCardIcon from '../asset/sinhan_card.png';
import WooriCardIcon from '../asset/woori_card.png';
import { CardCompany, CardInfoInput, CardType, InputStatus } from '../type';

export const MONTH_DATA = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const INVALID_MESSAGE: Record<CardInfoInput, Record<InputStatus, string>> = {
  securityCode: {
    INVALID: '보안카드 번호는 숫자 0~9를 사용해 3자리로 이루어져야 합니다.',
    VALID: '',
    INIT: '',
  },
  password: {
    INVALID: '비밀번호는 숫자 0~9를 사용해 각 1자리로 이루어져야 합니다.',
    VALID: '',
    INIT: '',
  },
  owner: {
    INVALID: '카드 소유자 이름은 영대문자, 30자 이내로 이루어져야 합니다.',
    VALID: '',
    INIT: '',
  },
  expired: {
    INVALID:
      '만료월/만료년은 숫자 0~9를 사용해 각 2자리로 이루어져야 합니다. 혹은 유효기간이 지났는지 확인하세요.',
    VALID: '',
    INIT: '',
  },
  cardNumber: {
    INVALID: '카드번호는 숫자 0~9를 사용해 각 4자리로 이루어져야 합니다.',
    VALID: '',
    INIT: '',
  },
};

export const CARD_NAME_IMAGE_SRCS: Record<CardCompany, string> = {
  BC카드: BcCardIcon,
  하나카드: HanaCardIcon,
  현대카드: HyundaiCardIcon,
  신한카드: SinhanCardIcon,
  국민카드: KookminCardIcon,
  우리카드: WooriCardIcon,
  카카오뱅크: KakaoBankIcon,
  롯데카드: LotteCardIcon,
  '카드사 선택': '',
};

export const CARD_COMPANY_ENG: Record<CardCompany, string> = {
  현대카드: 'hyundai',
  BC카드: 'bc',
  신한카드: 'sinhan',
  카카오뱅크: 'kakao',
  우리카드: 'woori',
  국민카드: 'kookmin',
  하나카드: 'hana',
  롯데카드: 'lotte',
  '카드사 선택': 'default-company',
};

export const APP_WIDTH = '318px';

export const CARD_INIT: Omit<CardType, 'id'> = {
  cardCompany: '카드사 선택',
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  cardOwner: '',
  expireMonth: '',
  expireYear: '',
  securityCode: '',
  cardPassword: {
    first: '',
    second: '',
  },
};

export const CARD_COMPANYS: CardCompany[] = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

export const YEAR = new Date().getFullYear();
export const YEAR_LAST = YEAR.toString().slice(2, 4);
export const MONTH = new Date().getMonth() + 1;
