export const CARD_TYPES = [
  { name: "포코", color: "gold" },
  { name: "준", color: "#9edbd0" },
  { name: "공원", color: "#55bf55" },
  { name: "후이", color: "#9198e5" },
  { name: "유세지", color: "#d873ff" },
  { name: "마르코", color: "#E76E9A" },
  { name: "아놀드", color: "#ffa56f" },
  { name: "록바", color: "#d19c89" },
];

export const CARD_TYPES_DEFAULT = { name: "", color: "" };

export const MODAL_NAME = {
  CARD_TYPE: "cardType",
  CARD_CVC: "cardCVC",
};

export const RULE_INPUT = {
  CARD_NUMBER_RULE: "[0-9]{4}",
  EXPIRE_DATE_RULE: "[0-9]{2}",
  CVC_RULE: "[0-9]{3}",
  PASSWORD_RULE: "[0-9]{1}",
};
