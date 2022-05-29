interface ILocalStorageKey {
  CARD_INFO: "cardInfo";
}

interface IRoutes {
  HOME: "/";
  ADD_CARD: "/react-payments/add-card";
}

const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(2));

export const MASKED_CHARACTER = "•";

export const CREATE_MASKED_CHARACTERS = (repeatCount: number): string =>
  `${MASKED_CHARACTER}`.repeat(repeatCount);

export const CARD_REGISTER_SUCCESS_MESSAGE =
  "카드가 정상적으로 등록되었습니다!";

export const BACK_BUTTON_CONFIRM_MESSAGE = `보유 카드 목록으로 이동하시겠어요?
확인 버튼을 누르시면 지금까지 기록한 정보는 사라집니다.`;

export const CARD_INFO_RULES = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  EXPIRE_DATE_UNIT_LENGTH: 2,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
  PASSWORD_UNIT_LENGTH: 1,
};

export const GUIDE_MESSAGE = {
  VALID_EXPIRE_DATE: `년도는 ${CURRENT_YEAR}년 ~ ${
    CURRENT_YEAR + 5
  }년 사이로 입력해주세요.`,
  VALID_CARD_ALIAS: "카드 별칭을 1 ~ 15자로 입력해주세요.",
  VALID_HOLDER_NAME: "카드 소유자 이름은 영문 대문자만 입력해주세요.",
  VALID_CARD_NUMBER: "카드 번호는 0~9까지 숫자로 입력해주세요.",
  VALID_PASSWORD: "비밀번호는 0~9까지 숫자로 입력해주세요.",
  VALID_SECURITY_CODE: "카드 뒷 면에 있는 3자리 숫자를 적어주세요.",
};

export const LOCAL_STORAGE_KEY: ILocalStorageKey = {
  CARD_INFO: "cardInfo",
};

export const ROUTES: IRoutes = {
  HOME: "/",
  ADD_CARD: "/react-payments/add-card",
};
