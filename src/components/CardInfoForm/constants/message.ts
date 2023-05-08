export const CARD_NUMBER_MESSAGE = {
  label: '카드 번호',
  helper: '카드 번호 16자리를 입력해 주세요.',
  placeholder: '0000',
} as const;

const EXPIRED_DATE_HELPER = {
  init: '만료일을 MM/YY 형식으로 입력해 주세요. (ex. 12/26)',
  month: '유효한 달을 입력해 주세요. (01-12 사이 숫자)',
  year: '유효한 연도를 입력해 주세요. (현재 년도 이상의 숫자)',
} as const;

export type ExpiredDateHelper =
  (typeof EXPIRED_DATE_HELPER)[keyof typeof EXPIRED_DATE_HELPER];

export const EXPIRED_DATE_MESSAGE = {
  label: '만료일',
  helper: EXPIRED_DATE_HELPER,
} as const;

export const CARD_OWNER_MESSAGE = {
  label: '카드 소유자 이름(선택)',
  helper: '영문자만 입력 가능합니다.',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
} as const;

export const CVC_MESSAGE = {
  label: '보안코드(CVC/CVV)',
  helper: '보안코드 세 자리 숫자를 입력해 주세요.',
  tooltip: '카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다.',
} as const;

export const PASSWORD_MESSAGE = {
  label: '카드 비밀번호',
  helper: '카드 비밀번호 앞 두 자리를 입력해 주세요.',
} as const;
