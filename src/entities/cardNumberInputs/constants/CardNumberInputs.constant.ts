import { CardNumberPosition } from "../../../shared/types/index.types";

export const CARD_NUMBER_LENGTH = 4;

export const ERROR_MESSAGE = {
  LENGTH: "4자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
};

export const CARD_NUMBER_POSITION: Record<
  "FIRST" | "SECOND" | "THIRD" | "FOURTH",
  CardNumberPosition
> = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
};
