import BCCard from "src/assets/bc_card.svg";
import HanaCard from "src/assets/hana_card.svg";
import HyundaiCard from "src/assets/hyundai_card.svg";
import KakaoBank from "src/assets/kakao_bank.svg";
import KookminCard from "src/assets/kookmin_card.svg";
import LotteCard from "src/assets/lotte_card.svg";
import ShinhanCard from "src/assets/shinhan_card.svg";
import WooriCard from "src/assets/woori_card.svg";
import { CardInfoProps } from "src/interfaces";

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

export const CARD_ID = [
  "bc-card",
  "shinhan-card",
  "kakao-bank",
  "hyundai-card",
  "woori-card",
  "lottee-card",
  "hana-card",
  "kookmin-card",
] as const;

export const BANK_LIST = [
  {
    id: CARD_ID[0],
    src: BCCard,
    name: "BC 카드",
  },
  {
    id: CARD_ID[1],
    src: ShinhanCard,
    name: "신한 카드",
  },
  {
    id: CARD_ID[2],
    src: KakaoBank,
    name: "카카오 뱅크",
  },
  {
    id: CARD_ID[3],
    src: HyundaiCard,
    name: "현대 카드",
  },
  {
    id: CARD_ID[4],
    src: WooriCard,
    name: "우리 카드",
  },
  {
    id: CARD_ID[5],
    src: LotteCard,
    name: "롯데 카드",
  },
  {
    id: CARD_ID[6],
    src: HanaCard,
    name: "하나 카드",
  },
  {
    id: CARD_ID[7],
    src: KookminCard,
    name: "국민 카드",
  },
] as const;

export const initialCardInfos: CardInfoProps = {
  cardNumbers: ["", "", "", ""],
  expireDate: "",
  ownerName: "",
  securityCode: "",
  password: ["", ""],
  cardName: null,
};

export const PATHS = {
  cardList: "/card-list",
  cardNickName: "/card-nickname",
  cardRegister: "/card-register",
} as const;
