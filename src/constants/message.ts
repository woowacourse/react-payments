export const PAYMENTS_MESSAGE = {
  expirationPeriodTitle: "카드 유효기간을 입력해주세요",
  expirationPeriodDescription: "월/년도(MMYY)를 순서대로 입력해 주세요.",

  cardNumbersTitle: "결제할 카드 번호를 입력해 주세요",
  cardNumberDescription: "본인 명의의 카드만 결제 가능합니다.",

  cardHolderTitle: "카드 소유자 이름을 입력해 주세요",
  cardHolderDescription: "영문 이름을 입력한 뒤 Enter를 눌러주세요",

  cardIssuerTitle: "카드사를 선택해 주세요",
  cardIssuerDescription: "현재 국내 카드사만 가능합니다.",

  cardCvcNumberTitle: "CVC 번호를 입력해 주세요",

  cardPasswordTitle: "비밀번호를 입력해 주세요",
  cardPasswordDescription: "앞의 2자리를 입력해 주세요",
};

export const PAYMENTS_INPUT_MESSAGE = {
  cardNumberLabel: "카드 번호",
  cardNumberPlaceHolder: "1234",
  cardNumberMaxLength: 4,

  cardIssuerPlaceHolder: "카드사를 선택해 주세요",

  expirationPeriodLabel: "유효기간",
  expirationPeriodPlaceHolder: ["MM", "YY"],
  expirationPeriodMaxLength: 2,

  cardHolderLabel: "소유자 이름",
  cardHolderPlaceHolder: "SALLY",
  cardHolderMaxLength: 30,

  cardCvcLabel: "CVC",
  cardCvcPlaceHolder: "123",

  cardPasswordLabel: "비밀번호 앞 2자리",
  cardPasswordPlaceHolder: "00",
  cardPasswordMaxLength: 2,
};

export const ERROR_MESSAGE = {
  notDigit: "올바른 숫자(0~9)를 입력해주세요",
  underLengthTail: "자리로 입력해주세요",
  notEnglish: "영어로 입력해주세요",
  wrongMonth: "올바른 월(01~12)를 입력해주세요",
  wrongYear: "올바른 년도(00~99)를 입력해주세요",
};
