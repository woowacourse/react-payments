export const CARD_NUMBER_DIGITS = 16;
export const CARD_NUMBER_INPUTS_LENGTH = 4; // input 개수: 4개
export const CARD_NUMBER_INPUT_SIZE = 4; // input 1개: 카드번호 4자리
export const MONTH_SIZE = 2;
export const YEAR_SIZE = 2;
export const DATE_TEXT = 'MM/YY';
export const MAX_NAME_SIZE = 30;
export const OWNER_NAME_TEXT = 'NAME';
export const SECURITY_CODE_SIZE = 3;
export const PASSWORD_SIZE = 2;
export const PASSWORD_START_INDEX = 2;
export const PASSWORD_TEXT = '•';

export const IMAGE_PATH = {
  BC: `${process.env.PUBLIC_URL}/assets/logo-bc.svg`,
  SHINHAN: `${process.env.PUBLIC_URL}/assets/logo-shinhan.svg`,
  KAKAO: `${process.env.PUBLIC_URL}/assets/logo-kakao.svg`,
  HYUNDAI: `${process.env.PUBLIC_URL}/assets/logo-hyundai.svg`,
  WOORI: `${process.env.PUBLIC_URL}/assets/logo-woori.svg`,
  LOTTE: `${process.env.PUBLIC_URL}/assets/logo-lotte.svg`,
  HANA: `${process.env.PUBLIC_URL}/assets/logo-hana.svg`,
  KOOKMIN: `${process.env.PUBLIC_URL}/assets/logo-kookmin.svg`,
} as const;

export const CARD_COMPANY = {
  BC: { name: 'BC카드', color: '#F04652', logo: IMAGE_PATH.BC },
  SHINHAN: { name: '신한카드', color: '#0046FF', logo: IMAGE_PATH.SHINHAN },
  KAKAO: { name: '카카오뱅크', color: '#FFE600', logo: IMAGE_PATH.KAKAO },
  HYUNDAI: { name: '현대카드', color: '#333333', logo: IMAGE_PATH.HYUNDAI },
  WOORI: { name: '우리카드', color: '#027BC8', logo: IMAGE_PATH.WOORI },
  LOTTE: { name: '롯데카드', color: '#ED1C23', logo: IMAGE_PATH.LOTTE },
  HANA: { name: '하나카드', color: '#009490', logo: IMAGE_PATH.HANA },
  KOOKMIN: { name: '국민카드', color: '#6F655B', logo: IMAGE_PATH.KOOKMIN },
};

export const CARD_COMPANY_KEY = {
  BC카드: 'BC',
  신한카드: 'SHINHAN',
  카카오뱅크: 'KAKAO',
  현대카드: 'HYUNDAI',
  우리카드: 'WOORI',
  롯데카드: 'LOTTE',
  하나카드: 'HANA',
  국민카드: 'KOOKMIN',
} as const;

export const ERROR = {
  IS_NOT_NUMBER: '숫자를 입력해주세요.',
  INVALID_CARD_NUMBER: `유효하지 않은 카드 번호입니다. ${CARD_NUMBER_DIGITS}자리 숫자를 입력해주세요.`,
  INVALID_EXPIRATION_DATE: `유효하지 않은 만료일입니다. 현재 월/연도 이후의 날짜를 입력해주세요.`,
  INVALID_OWNER_NAME: `유효하지 않은 이름입니다. 최대 ${MAX_NAME_SIZE}자의 영문으로 입력해주세요.`,
  INVALID_SECURITY_CODE: `유효하지 않은 보안코드입니다. ${SECURITY_CODE_SIZE}자리의 숫자를 입력해주세요.`,
  INVALID_PASSWORD: `유효하지 않은 비밀번호입니다. ${PASSWORD_SIZE}자리의 숫자를 입력해주세요.`,
} as const;
