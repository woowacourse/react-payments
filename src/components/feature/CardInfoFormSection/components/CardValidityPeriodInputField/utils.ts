import type { ValidityPeriod } from "@/types/card";
import {
  checkIsInt,
  validateMonthRange,
  validateYearRange,
} from "@utils/validator";

import { MONTH_MAX_LENGTH, YEAR_MAX_LENGTH } from "./constants";
import type { InputStatus } from "./errorMessage";

export const checkCardNumberInputStatus = (
  key: keyof ValidityPeriod,
  value: string,
): InputStatus => {
  if (!checkIsInt(+value)) {
    return "ONLY_NUMBER";
  }

  if (key === "month") {
    if (value.length === 0) {
      return "DEFAULT";
    }

    if (value.length === MONTH_MAX_LENGTH && !validateMonthRange(+value)) {
      return "MONTH_RANGE_ERROR";
    }

    if (value.length === MONTH_MAX_LENGTH && validateMonthRange(+value)) {
      return "SUCCESS";
    }

    return "DEFAULT";
  }
  if (key === "year") {
    if (value.length === 0) return "DEFAULT";
    if (value.length === YEAR_MAX_LENGTH && !validateYearRange(+value)) {
      return "YEAR_RANGE_ERROR";
    }

    if (value.length === YEAR_MAX_LENGTH && validateYearRange(+value)) {
      return "SUCCESS";
    }

    return "DEFAULT";
  }
  return "DEFAULT";
};

export const formatValidityPeriod = (nextRaw: string) => {
  return nextRaw.replace(/\D/g, "").slice(0, 2);
};
