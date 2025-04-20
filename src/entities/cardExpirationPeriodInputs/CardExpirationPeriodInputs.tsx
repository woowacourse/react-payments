import { useState } from "react";
import Input from "../../shared/input/Input";
import { ExpirationPeriod } from "../../\btypes/index.types";
import {
  isValidLength,
  isValidMonthRange,
  isValidNumber,
  isValidYearRange,
} from "../../util/validation";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

const EXPIRATION_PERIOD: Record<"MONTH" | "YEAR", keyof ExpirationPeriod> = {
  MONTH: "month",
  YEAR: "year",
};

const EXPIRATION_PERIOD_LENGTH = 2;

const errorMessage = {
  length: "2자리만 입력 가능합니다.",
  number: "숫자만 입력 가능합니다.",
  monthRange: "유효기간은 1~12월 사이여야 합니다.",
  yearRange: "유효기간은 25~99년 사이여야 합니다.",
};

type ExpirationPeriodProps = {
  expirationPeriod: ExpirationPeriod;
  changeExpirationPeriod: (
    expirationPeriod: keyof ExpirationPeriod,
    date: string
  ) => void;
};

function getValidationFns(length: number, date: string) {
  const common = [
    { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(date, length),
      errorMsg: errorMessage.length,
    },
    {
      condition: () => !isValidNumber(date),
      errorMsg: errorMessage.number,
    },
  ];

  return {
    month: [
      { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
      {
        condition: () => !isValidMonthRange(date),
        errorMsg: errorMessage.monthRange,
      },
      ...common,
    ],
    year: [
      { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
      {
        condition: () => !isValidYearRange(date),
        errorMsg: errorMessage.yearRange,
      },
      ...common,
    ],
  };
}

function getErrorMessage(error: Record<keyof ExpirationPeriod, string>) {
  for (const key in error) {
    const typedKey = key as keyof typeof error;
    if (error[typedKey] !== NO_ERROR) {
      return error[typedKey];
    }
  }
}

function CardExpirationPeriodInputs({
  expirationPeriod,
  changeExpirationPeriod,
}: ExpirationPeriodProps) {
  const [error, setError] = useState({
    month: NO_ERROR,
    year: NO_ERROR,
  });

  function checkValidation(
    length: number,
    date: string,
    type: "year" | "month"
  ) {
    const validations = getValidationFns(length, date);
    const validation = validations[type].find((v) => v.condition());

    setError((prev) => {
      return { ...prev, [type]: validation?.errorMsg || NO_ERROR };
    });
  }

  const errorMessage = getErrorMessage(
    error as Record<keyof ExpirationPeriod, string>
  );

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          value={expirationPeriod["month"]}
          onChange={(e) => {
            checkValidation(EXPIRATION_PERIOD_LENGTH, e.target.value, "month");
            changeExpirationPeriod(EXPIRATION_PERIOD.MONTH, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={error["month"] !== NO_ERROR}
        ></Input>
        <Input
          value={expirationPeriod["year"]}
          onChange={(e) => {
            checkValidation(EXPIRATION_PERIOD_LENGTH, e.target.value, "year");
            changeExpirationPeriod(EXPIRATION_PERIOD.YEAR, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="YY"
          isError={error["year"] !== NO_ERROR}
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
