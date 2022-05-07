const CARD_NUMBER = {
  UNIT_LENGTH: 4,
  INPUT_COUNT: 4,
};

const CARD_SIZE = {
  SMALL: "small",
  BIG: "big",
};

const DUE_DATE = {
  UNIT_LENGTH: 2,
};

const OWNER = {
  MAX_LENGTH: 30,
};

const CVC = {
  UNIT_LENGTH: 3,
};

const PASSWORD = {
  UNIT_LENGTH: 1,
};

const MONTH = {
  MIN: 1,
  MAX: 12,
};

const NAME = {
  MONTH: "month",
  YEAR: "year",
};

const NICKNAME = {
  MAX_LENGTH: 30,
};

const ACTION = {
  CREATE: "CREATE",
  EDIT_NICKNAME: "EDIT_NICKNAME",
  EDIT_CARD: "EDIT_CARD",
};

const ERROR_MESSAGES = {
  NOT_EXIST_CARD: "존재하지 않는 카드입니다.",
};

const COLORS = {
  MINT: "#04C09E",
  GRAY: "#D2D2D2",
  LIGHT_GRAY: "#ecebf1",
  DARK_GRAY: "#525252",
  PINK: "#E36DB0",
  LIGHT_PINK: "#fcdfef",
};

const CARD_LIST = [
  { color: "red", name: "레드 카드" },
  { color: "blue", name: "블루 카드" },
  { color: "green", name: "그린 카드" },
  { color: "yellow", name: "옐로 카드" },
  { color: "pink", name: "핑크 카드" },
  { color: "orange", name: "오렌지 카드" },
  { color: "purple", name: "퍼플 카드" },
  { color: "brown", name: "브라운 카드" },
];

export {
  CARD_NUMBER,
  CARD_SIZE,
  DUE_DATE,
  OWNER,
  NICKNAME,
  CVC,
  PASSWORD,
  MONTH,
  ACTION,
  ERROR_MESSAGES,
  COLORS,
  NAME,
  CARD_LIST,
};
