export const cardInfos = [
  {
    cardName: "포코 카드",
    cardType: "pocoCard",
  },
  {
    cardName: "준 카드",
    cardType: "junCard",
  },
  {
    cardName: "공원 카드",
    cardType: "gongwonCard",
  },
  {
    cardName: "브랜 카드",
    cardType: "branCard",
  },
  {
    cardName: "로이드 카드",
    cardType: "roidCard",
  },
  {
    cardName: "도비 카드",
    cardType: "dobbyCard",
  },
  {
    cardName: "콜린 카드",
    cardType: "collinCard",
  },
  {
    cardName: "썬 카드",
    cardType: "sunCard",
  },
] as const;

export const defaultCardInfo = {
  cardName: "",
  cardType: "defaultCard",
} as const;

export const MAX_LENGTH = {
  CARD_NUMBER: 4,
  CARD_PASSWORD: 1,
  EXPIRE_DATE: 2,
  SECURITY_CODE: 3,
  USER_NAME: 30,
  CARD_NAME: 15,
} as const;

export const MIDDLE_CARD_NUMBER_LENGTH = 2 as const;

export const MAX_MONTH = 12 as const;

export const HELP_MESSAGE = "카드 뒷면의 3자리 숫자를 입력해주세요." as const;

export const ERROR_MESSAGE = {
  CARD_NUMBER: "빈칸없이 입력을 완료해주세요.",
  EXPIRE_DATE: `월은 ${MAX_MONTH}이하로 빈칸없이 입력해주세요.`,
  SECURITY_CODE: `${MAX_LENGTH.SECURITY_CODE}개의 숫자를 입력해주세요.`,
  CARD_PASSWORD: "비밀번호 앞 2자리를 입력해주세요.",
  CARD_NAME_LENGTH: `1 ~ ${MAX_LENGTH.CARD_NAME}자 이하의 이름을 입력해주세요.`,
  DUPLICATE_CARD_NAME: "이미 존재하는 카드이름입니다.",
} as const;

export const SUCCESS_MESSAGE = "성공적으로 입력됐습니다." as const;

export const REDUCER_TYPE = {
  CREATE: "CREATE",
} as const;
