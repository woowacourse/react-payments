const TITLE = {
  cardNumber: '결제할 카드 번호를 입력해 주세요',
  expirationDate: '카드 유효기간을 입력해 주세요',
  userName: '카드 소유자 이름을 입력해 주세요',
  cardBrand: '카드사를 선택해 주세요',
} as const;

const CAPTION = {
  cardNumber: '본인 명의의 카드만 결제 가능합니다.',
  expirationDate: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  cardBrand: '현재 국내 카드사만 가능합니다.',
} as const;

const LABEL = {
  cardNumber: '카드 번호',
  expirationDate: '유효기간',
  userName: '소유자 이름',
} as const;

const ERROR = {
  cardNumber: '4자리 숫자를 입력해주세요.',
  month: '01~12 사이의 숫자를 입력해주세요.',
  year: '2자리 숫자를 입력해주세요.',
  userName: '성과 이름을 띄어쓰기를 포함한 대문자로만 입력해주세요.',
} as const;

const PLACEHOLDER = {
  cardNumber: '1234',
  month: 'MM',
  year: 'YY',
  userName: 'JOHN DAE',
  cardBrand: '카드사를 선택해주세요',
} as const;

const MESSAGE = {
  TITLE,
  CAPTION,
  LABEL,
  ERROR,
  PLACEHOLDER,
} as const;

export default MESSAGE;
