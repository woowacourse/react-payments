import {
  checkIsOnlyDigits,
  checkLengthMatches,
  validateMonthRange,
} from "@/utils/validator";
import { MONTH_MAX_LENGTH, type InputStatus } from "./constants";

const vlidateMonth = (month: string): InputStatus => {
  if (!checkIsOnlyDigits(month)) return "NOT_NUMBER";

  if (!checkLengthMatches(month, MONTH_MAX_LENGTH))
    return "INVALID_MONTH_LENGTH";

  if (!validateMonthRange(+month)) return "INVALID_MONTH_RANGE";

  return "DEFAULT";
};
