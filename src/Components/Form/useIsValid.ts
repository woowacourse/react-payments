import useContextWrapper from "../../hooks/useContextWrapper";
import {
  CardCVCContext,
  CardIssuerContext,
  CardNumbersContext,
  CardOwnerInfoContext,
  CardPasswordContext,
  CardValidityPeriodContext,
} from "../../routes/Payments/CardInfoContextProvider";

import {
  CardCVCErrorContext,
  CardIssuerErrorContext,
  CardNumberErrorContext,
  CardOwnerInfoErrorContext,
  CardPasswordErrorContext,
  CardValidityPeriodErrorContext,
} from "../../routes/Payments/FormContextProvider";

export const isNumberValid = (cardNumbers: CardNumbers, numberError: CardNumbersError) => {
  if (
    cardNumbers.firstNumbers?.length === 4 &&
    cardNumbers.secondNumbers?.length === 4 &&
    cardNumbers.thirdNumbers?.length === 4 &&
    cardNumbers.fourthNumbers?.length === 4 &&
    !numberError.firstNumbers?.isError &&
    !numberError.secondNumbers?.isError &&
    !numberError.thirdNumbers?.isError &&
    !numberError.fourthNumbers?.isError
  ) {
    return true;
  }
  return false;
};

export const isIssuerValid = ({ name }: CardIssuer, { name: nameError }: CardIssuerError) => {
  if (name && !nameError.isError) {
    return true;
  }
  return false;
};

const PERIOD_ERROR_MESSAGE = {
  NOT_VALID_YEAR: "잘못된 년도를 입력하셨습니다. 유효한 년도를 입력해주세요.",
  NOT_VALID_MONTH: "잘못된 월을 입력하셨습니다. 유효한 월을 입력해주세요.",
};

export const isPeriodValid = (
  { month, year }: CardValidityPeriod,
  { month: monthError, year: yearError }: CardValidityPeriodError
): { isValid: boolean; name?: "year" | "month"; errorMessage?: string } => {
  const currentDate = new Date(Date.now());
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = Number(currentDate.getFullYear().toString().slice(2));

  if (currentYear > Number(year)) {
    return { isValid: false, name: "year", errorMessage: PERIOD_ERROR_MESSAGE.NOT_VALID_YEAR };
  }

  if (month?.length === 2 && year?.length === 2 && !monthError?.isError && !yearError?.isError) {
    if (currentYear === Number(year) && currentMonth > Number(month)) {
      return { isValid: false, name: "month", errorMessage: PERIOD_ERROR_MESSAGE.NOT_VALID_MONTH };
    }
    return { isValid: true };
  }

  return { isValid: false };
};

export const isOwnerValid = ({ name }: CardOwnerInfo, { name: errorName }: CardOwnerInfoError) => {
  if (name && !errorName?.isError) {
    return true;
  }
  return false;
};

export const isCVCValid = ({ value }: CardCVC, { value: valueError }: CardCVCError) => {
  if (value?.length === 3 && !valueError.isError) {
    return true;
  }
  return false;
};

export const isPasswordValid = ({ value }: CardPassword, { value: valueError }: CardPasswordError) => {
  if (value?.length === 2 && !valueError.isError) {
    return true;
  }
  return false;
};

const useIsCardInfoValid = () => {
  const cardNumbers = useContextWrapper(CardNumbersContext)[0];
  const cardIssuer = useContextWrapper(CardIssuerContext)[0];
  const cardPeriod = useContextWrapper(CardValidityPeriodContext)[0];
  const cardOwner = useContextWrapper(CardOwnerInfoContext)[0];
  const cardCVC = useContextWrapper(CardCVCContext)[0];
  const cardPassword = useContextWrapper(CardPasswordContext)[0];

  const numbersError = useContextWrapper(CardNumberErrorContext)[0];
  const issuerError = useContextWrapper(CardIssuerErrorContext)[0];
  const periodError = useContextWrapper(CardValidityPeriodErrorContext)[0];
  const ownerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cvcError = useContextWrapper(CardCVCErrorContext)[0];
  const passwordError = useContextWrapper(CardPasswordErrorContext)[0];

  if (
    isNumberValid(cardNumbers, numbersError) &&
    isIssuerValid(cardIssuer, issuerError) &&
    isPeriodValid(cardPeriod, periodError).isValid &&
    isOwnerValid(cardOwner, ownerError) &&
    isCVCValid(cardCVC, cvcError) &&
    isPasswordValid(cardPassword, passwordError)
  ) {
    return true;
  }
  return false;
};

export default useIsCardInfoValid;
