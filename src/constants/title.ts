import { CARD_VALIDATION_INFO } from "./cardValidationInfo";

export const INPUT_CONTAINER = {
  EXPIRE: {
    TITLE: "카드 유효기간을 입력해 주세요",
    SUBTITLE: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  },
  CARD_NUMBERS: {
    TITLE: "결제할 카드 번호를 입력해 주세요",
    SUBTITLE: "본인 명의의 카드만 결제 가능합니다.",
  },
  CVC: {
    TITLE: "CVC 번호를 입력해 주세요",
  },
  CARD_COMPANY: {
    TITLE: "카드사를 선택해 주세요",
    SUBTITLE: "현재 국내 카드사만 가능합니다.",
    PLACEHOLDER: "카드사 선택",
  },
  PASSWORD: {
    TITLE: "비밀번호를 입력해 주세요",
    SUBTITLE: `앞의 ${CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH}자리를 입력해주세요`,
  },
};
