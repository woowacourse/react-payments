import { CompanyType } from "../types";

export const MIN_MONTH = 1;
export const MAX_MONTH = 12;

export const MIN_YEAR = 25;

export const NUMBER_ONLY_REGEX = /^[0-9]*$/;

export const ERROR_MESSAGE = {
  IS_NOT_NUMBER: "숫자값만 입력해주세요.",
  MM_VALID: "유효한 월(1~12)만 입력해주세요.",
  YY_VALID: "유효한 년도(25~)만 입력해주세요.",
};

export const CARD_COMPANY_COLORS: Record<Exclude<CompanyType, "">, string> = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};
