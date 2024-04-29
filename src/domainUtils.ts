/**
 * @param n 1~2 자리 숫자가 들어온다.
 * @returns 0일경우 빈 문자열, 1자리 숫자가 들어올 경우 앞에 숫자 앞에 "0"을 붙인 문자열을 반환, 2자리 숫자가 들어올 경우 숫자를 문자열로 반환
 * @example formatTwoDigitNumber(0) => ""
 * @example formatTwoDigitNumber(3) => "03"
 * @example formatTwoDigitNumber(12) => "12"
 */
export const formatTwoDigitNumber = (n: string | undefined) => {
  if (!n) return "";
  if (n.length > 2) throw new Error("formatTwoDigitNumber에서 잘못된 입력을 받았습니다.");
  return n.padStart(2, "0");
};

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
