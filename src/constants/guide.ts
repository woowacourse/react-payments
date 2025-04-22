export const CARD_NUMBER_MESSAGE = {
  MAIN: "결제할 카드 번호를 입력해 주세요",
  CAPTION: "본인 명의의 카드만 결제 가능합니다.",
};

export const EXPIRATION_MESSAGE = {
  MAIN: "카드 유효기간을 입력해 주세요",
  CAPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
};

export const CVC_MESSAGE = {
  MAIN: "CVC 번호를 입력해 주세요",
};

export const ERROR_MESSAGE = {
  LENGTH: (length: number) => `입력값은 ${length}자리여야 합니다.`,
  INVALID_MONTH: "유효하지 않은 월입니다. 01-12 사이의 값을 입력하세요",
  INVALID_YEAR: "유효하지 않은 연도입니다",
  EXPIRED: "만료된 카드입니다.",
};
