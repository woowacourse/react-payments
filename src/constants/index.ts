export const CARD_FORM_TITLE = Object.freeze({
  NUMBER: '카드 번호',
  EXPIRATION_DATE: '만료일',
  OWNER: '카드 소유자 이름 (선택)',
  SECURITY_CODE: '보안 코드(CVC/CVV)',
  PASSWORD: '카드 비밀번호',
});

export const SECURITY_CODE_HELP = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

export const CARD_FORM_ERROR_MESSAGE = Object.freeze({
  FULL_NUMBER: '카드 번호 16자를 전부 기입했는지 다시 확인해 주세요.',
  EXPIRATION_DATE: '만료 날짜(월)를 다시 확인해주세요.',
  OUT_OF_EXPIRATION_DATE: '만료 날짜가 지났습니다.',
  FULL_SECURITY_CODE: 'CVC/CVV코드 3자를 전부 기입했는지 다시 확인해 주세요.',
  FULL_PASSWORD: '비밀번호 앞자리 2자를 전부 기입했는지 다시 확인해 주세요.',
});

export const CARD_PASSWORD_LENGTH = 2;
export const CARD_NUMBER_LENGTH = 2;
export const CARD_SECURITY_CODE_LENGTH = 3;
