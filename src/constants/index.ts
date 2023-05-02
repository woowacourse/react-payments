import { CardCompany, CardCompanyKey } from '../types';

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
export const CARD_ALIAS_SIZE = 20;

export const CARD_SELECT_COMPLETE_BUTTON = '카드사 선택 완료';

export const CARD_COMPANIES = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export const CARD_COMPANY_KEYS = [
  'BC',
  'SHINHAN',
  'KAKAO',
  'HYUNDAI',
  'WOORI',
  'LOTTE',
  'HANA',
  'KOOKMIN',
] as const;

export const IMAGE_PATH: Readonly<Record<CardCompanyKey, string>> = {
  BC: `${process.env.PUBLIC_URL}/assets/logo-bc.svg`,
  SHINHAN: `${process.env.PUBLIC_URL}/assets/logo-shinhan.svg`,
  KAKAO: `${process.env.PUBLIC_URL}/assets/logo-kakao.svg`,
  HYUNDAI: `${process.env.PUBLIC_URL}/assets/logo-hyundai.svg`,
  WOORI: `${process.env.PUBLIC_URL}/assets/logo-woori.svg`,
  LOTTE: `${process.env.PUBLIC_URL}/assets/logo-lotte.svg`,
  HANA: `${process.env.PUBLIC_URL}/assets/logo-hana.svg`,
  KOOKMIN: `${process.env.PUBLIC_URL}/assets/logo-kookmin.svg`,
};

export const CARD_COMPANY: Readonly<
  Record<CardCompanyKey, { name: CardCompany; color: string; logo: string }>
> = {
  BC: { name: 'BC카드', color: '#F04652', logo: IMAGE_PATH.BC },
  SHINHAN: { name: '신한카드', color: '#0046FF', logo: IMAGE_PATH.SHINHAN },
  KAKAO: { name: '카카오뱅크', color: '#FFE600', logo: IMAGE_PATH.KAKAO },
  HYUNDAI: { name: '현대카드', color: '#333333', logo: IMAGE_PATH.HYUNDAI },
  WOORI: { name: '우리카드', color: '#027BC8', logo: IMAGE_PATH.WOORI },
  LOTTE: { name: '롯데카드', color: '#ED1C23', logo: IMAGE_PATH.LOTTE },
  HANA: { name: '하나카드', color: '#009490', logo: IMAGE_PATH.HANA },
  KOOKMIN: { name: '국민카드', color: '#6F655B', logo: IMAGE_PATH.KOOKMIN },
};

export const CONVERT_CARD_COMPANY_KEY: Readonly<Record<CardCompany, CardCompanyKey>> = {
  BC카드: 'BC',
  신한카드: 'SHINHAN',
  카카오뱅크: 'KAKAO',
  현대카드: 'HYUNDAI',
  우리카드: 'WOORI',
  롯데카드: 'LOTTE',
  하나카드: 'HANA',
  국민카드: 'KOOKMIN',
};

export const ERROR = {
  IS_NOT_NUMBER: '숫자를 입력해주세요.',
  INVALID_CARD_NUMBER: `카드번호 ${CARD_NUMBER_DIGITS}자리 숫자를 입력해주세요.`,
  INVALID_MONTH: `월은 1~12사이의 숫자로 입력해주세요.`,
  INVALID_EXPIRATION_DATE: `현재 월/연도 이후의 날짜를 입력해주세요.`,
  INVALID_OWNER_NAME: `카드 소유자의 이름을 최대 ${MAX_NAME_SIZE}자의 영문으로 입력해주세요.`,
  INVALID_SECURITY_CODE: `카드 뒷면 서명란에 인쇄된 숫자 끝 ${SECURITY_CODE_SIZE}자리를 입력해주세요.`,
  INVALID_PASSWORD: `카드 비밀번호 앞 ${PASSWORD_SIZE}자리를 입력해주세요.`,
  INVALID_CARD_ALIAS: `카드 별칭은 최대 ${CARD_ALIAS_SIZE}자까지 입력 가능합니다.`,
} as const;
