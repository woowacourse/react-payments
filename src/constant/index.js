const CARD_NUMBER = {
  UNIT_LENGTH: 4,
  INPUT_COUNT: 4,
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
  DUE_DATE,
  OWNER,
  CVC,
  PASSWORD,
  MONTH,
  COLORS,
  NAME,
  CARD_LIST,
};
