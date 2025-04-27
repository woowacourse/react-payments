import { ExpirationPeriod } from "../../../shared/types/index.types";

export const EXPIRATION_PERIOD: Record<"MONTH" | "YEAR", ExpirationPeriod> = {
  MONTH: "month",
  YEAR: "year",
};

export const EXPIRATION_PERIOD_LENGTH = 2;

export const ERROR_MESSAGE = {
  LENGTH: "2자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
  MONTH_RANGE: "유효기간은 1~12월 사이여야 합니다.",
  YEAR_RANGE: "유효기간은 25~99년 사이여야 합니다.",
};
