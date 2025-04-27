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
  const cardNumberError = useError<Record<CardNumberPosition, string>>(
    {
      first: NO_ERROR,
      second: NO_ERROR,
      third: NO_ERROR,
      fourth: NO_ERROR,
    },
    getCardNumberValidationFns
  );

  const monthError = useError<Record<"month", string>>(
    {
      month: NO_ERROR,
    },
    getMonthValidationFns
  );

  const yearError = useError<Record<"year", string>>(
    {
      year: NO_ERROR,
    },
    getYearValidationFns
  );

  const CVCError = useError<Record<"CVCNumber", string>>(
    {
      CVCNumber: NO_ERROR,
    },
    getCVCValidationFns
  );

  const passwordError = useError<Record<"password", string>>(
    {
      password: NO_ERROR,
    },
    getPasswordValidationFns
  );

  return {
    cardNumberError,
    monthError,
    yearError,
    CVCError,
    passwordError,
  };
}
