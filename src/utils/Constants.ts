export const INPUT: Readonly<{ [key: string]: number }> = {
  CARD_NUMBER_VISIBLE_INPUT_ORDER: 2,
  CARD_NUMBER_LAST_INPUT_ORDER: 3,
};

export const INPUT_MAX_LENGTH: Readonly<{ [key: string]: number }> = {
  CARD_NUMBER_LENGTH: 4,
  EXPIRATION_DATE_LENGTH: 2,
  NAME_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 1,
};

export const ERROR_MESSAGE: Readonly<{ [key: string]: string }> = {
  ONLY_NUMBER: '숫자만 입력해주세요',
  ONLY_ENGLISH: '영어만 입력해주세요',
  EXPIRATION_DATE_FORM: '만료일은 MM/YY 형식으로 입력해주세요',
  VALID_MONTH: '유효한 달을 입력해주세요',
  MAX_INPUT_LENGTH: '30자 이하로 입력해주세요',
};

export const CONVERT_BANK_NAME: Readonly<{ [key: string]: string }> = {
  BC카드: 'BC',
  신한카드: 'Shinhan',
  카카오뱅크: 'Kakao',
  현대카드: 'Hyundai',
  우리카드: 'Woori',
  롯데카드: 'Lotte',
  하나카드: 'Hana',
  국민카드: 'KB',
};
