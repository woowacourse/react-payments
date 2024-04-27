import { CSSProperties } from "react";
import { CardFormField } from "../types/card";

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: "4자리의 숫자를 입력해 주세요.",
  onlyEnglishAllowed: "영문만 입력 가능합니다.",
  invalidDate: "유효하지 않은 MM/YY 형식입니다.",
  invalidOwnerName: "사용자 이름은 0 ~ 15자 사이의 영문이어야 합니다.",
  invalidCVCNumber: "3자리의 숫자를 입력해 주세요",
  invalidCardPassword: "비밀번호 앞 2자리 숫자를 입력해주세요.",
};

export const CARD_NUMBER = {
  visaStartNumber: 4,
  minMasterNumber: 51,
  maxMasterNumber: 55,
};

export const INPUT_RULES = {
  minMonth: 1,
  maxMonth: 12,
  maxCardNumberPartLength: 4,
  maxExpirationDateLength: 2,
  maxCardOwnerNameLength: 15,
};

interface FormDescription {
  query: string;
  labelText: string;
  caption: string;
}

type CardFormAttribute = {
  [key in CardFormField]: FormDescription;
};

export const CARD_FORM_ATTRIBUTES: CardFormAttribute = {
  cardNumbers: {
    query: "결제할 카드 번호를 입력해 주세요",
    labelText: "카드 번호",
    caption: "본인 명의의 카드만 결제 가능합니다",
  },

  cardCompany: {
    query: "카드사를 선택해 주세요",
    labelText: "",
    caption: "현재 국내 카드사만 가능합니다",
  },

  expirationDate: {
    query: "카드 유효기간을 입력해 주세요",
    labelText: "유효기간",
    caption: "월/년도(MM/YY)를 순서대로 입력해 주세요",
  },

  ownerName: {
    query: "카드 소유자 이름을 입력해 주세요",
    labelText: "소유자 이름",
    caption: "",
  },

  cvcNumber: {
    query: "CVC 번호를 입력해 주세요",
    labelText: "CVC",
    caption: "",
  },

  cardPassword: {
    query: "비밀번호를 입력해 주세요",
    labelText: "비밀번호 앞 2자리",
    caption: "앞의 2자리를 입력해 주세요",
  },
};

export const CARD_APP_PATH = {
  new: "/",
  complete: "/complete",
} as const;

export const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

export const CARD_COMPANY_COLOR: Record<CardCompany, CSSProperties["color"]> = {
  기본카드: "#333333",
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

export type CardCompany = (typeof CARD_COMPANIES)[number] | "기본카드";
