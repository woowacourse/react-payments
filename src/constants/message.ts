export const ERROR_MESSAGE = {
  cardNumber: '4자리 숫자만 입력 가능해요.',
  cardExpirationPeriod: {
    month: `1~12까지의 숫자만 입력해주세요 \n 1~9는 앞에 0을 붇일 수 있어요`,
    year: '00~99까지의 숫자만 입력해주세요 \n 1~9는 앞에 0을 붇일 수 있어요',
    availability: '유효한 기간을 입력해주세요.',
  },
  userName: '소유자 이름은 영문과 공백만 가능해요.',
};

export const CARD_NUMBERS_FORM_MESSAGE = {
  title: '결제할 카드 번호를 입력해 주세요',
  subTitle: '본인 명의의 카드만 결제 가능합니다.',
  label: '카드 번호',
  placeholder: '1234',
};

export const CARD_EXPIRATION_PERIOD_FORM_MESSAGE = {
  title: '카드 유효기간을 입력해 주세요',
  subTitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  label: '유효기간',
  yearPlaceholder: 'YY',
  monthPlaceholder: 'MM',
};

export const CARD_USER_FORM_MESSAGE = {
  title: '카드 소유자 이름을 입력해 주세요',
  label: '소유자 이름',
  namePlaceholder: '소유자 이름',
};

export const CARD_COMPANY_MESSAGE = {
  title: '카드사를 선택헤주세요.',
  subTitle: '현재 국내 카드사만 가능합니다.',
  label: '카드사',
};

export const CARD_CVC_MESSAGE = {
  title: 'CVC번호를 입력해주세요.',
  label: 'cvc번호',
  placeholder: '123',
};
