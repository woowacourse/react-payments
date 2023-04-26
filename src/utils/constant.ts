import BCCard from "src/assets/bc_card.svg";
import HanaCard from "src/assets/hana_card.svg";
import HyundaiCard from "src/assets/hyundai_card.svg";
import KakaoBank from "src/assets/kakao_bank.svg";
import KookminCard from "src/assets/kookmin_card.svg";
import LotteCard from "src/assets/lotte_card.svg";
import ShinhanCard from "src/assets/shinhan_card.svg";
import WooriCard from "src/assets/woori_card.svg";

export const NUMBERS = {
  MAX_CARD: 16,
  EACH_CARD: 4,
  MAX_EXPIREDATE: 5,
  MAX_SECURITY: 3,
  MAX_PASSWORD: 2,
  EACH_PASSWORD: 1,
  MAX_OWNER_NAME: 30,
  MIN_OWNER_NAME: 3,
} as const;

export const CARD_NUMBER_TYPES = [
  "first",
  "second",
  "third",
  "fourth",
] as const;

export const PASSWORD_NUMBER_TYPES = ["first", "second"] as const;

export const BANK_LIST = [
  {
    id: "bc-card",
    src: BCCard,
    name: "BC 카드",
  },
  {
    id: "shinhan-card",
    src: ShinhanCard,
    name: "신한 카드",
  },
  {
    id: "kakao-bank",
    src: KakaoBank,
    name: "카카오 뱅크",
  },
  {
    id: "hyundai-card",
    src: HyundaiCard,
    name: "현대 카드",
  },
  {
    id: "woori-card",
    src: WooriCard,
    name: "우리 카드",
  },
  {
    id: "lottee-card",
    src: LotteCard,
    name: "롯데 카드",
  },
  {
    id: "hana-card",
    src: HanaCard,
    name: "하나 카드",
  },
  {
    id: "kookmin-card",
    src: KookminCard,
    name: "국민 카드",
  },
] as const;

export const initialCardInfos = {
  cardNumbers: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  expireDate: "",
  ownerName: "",
  securityCode: "",
  password: {
    first: "",
    second: "",
  },
  cardName: {
    name: "",
    id: "",
  },
};

export const PATHS = {
  cardList: "/card-list",
  cardNickName: "/card-nickName",
  cardRegister: "/card-register",
} as const;
