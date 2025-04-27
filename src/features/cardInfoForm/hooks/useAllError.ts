import { CardNumberPosition } from "./../../../types/index.types";
import { NO_ERROR } from "../../../shared/constants/constant";
import useError from "./useError";
import { getCardNumberValidationFns } from "../../../entities/cardNumberInputs/CardNumberInputs.domain";
import {
  getMonthValidationFns,
  getYearValidationFns,
} from "../../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs.domain";
import { getCVCValidationFns } from "../../../entities/cardCVCNumberInputs/CardCVCNumberInputs.domain";
import { getPasswordValidationFns } from "../../../entities/cardPasswordInputs/CardPasswordInputs.domain";

export function useAllError() {
  const cardNumberError = useError<Record<CardNumberPosition, string>>({
    initError: {
      first: NO_ERROR,
      second: NO_ERROR,
      third: NO_ERROR,
      fourth: NO_ERROR,
    },
    getValidationFns: getCardNumberValidationFns,
  });

  const monthError = useError<Record<"month", string>>({
    initError: {
      month: NO_ERROR,
    },
    getValidationFns: getMonthValidationFns,
  });

  const yearError = useError<Record<"year", string>>({
    initError: {
      year: NO_ERROR,
    },
    getValidationFns: getYearValidationFns,
  });

  const CVCError = useError<Record<"CVCNumber", string>>({
    initError: {
      CVCNumber: NO_ERROR,
    },
    getValidationFns: getCVCValidationFns,
  });

  const passwordError = useError<Record<"password", string>>({
    initError: {
      password: NO_ERROR,
    },
    getValidationFns: getPasswordValidationFns,
  });

  return {
    cardNumberError,
    monthError,
    yearError,
    CVCError,
    passwordError,
  };
}
