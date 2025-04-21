import { useState } from "react";
import Input from "../../shared/input/Input";
import { ExpirationPeriod } from "../../\btypes/index.types";
import {
  getErrorMessage,
  getMonthValidationFns,
  getYearValidationFns,
} from "./CardExpirationPeriodInputs.domain.ts";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  EXPIRATION_PERIOD,
  EXPIRATION_PERIOD_LENGTH,
} from "./CardExpirationPeriodInputs.constant.ts";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

type ExpirationPeriodProps = {
  expirationPeriod: Record<ExpirationPeriod, string>;
  changeExpirationPeriod: (
    expirationPeriod: ExpirationPeriod,
    date: string
  ) => void;
};

function CardExpirationPeriodInputs({
  expirationPeriod,
  changeExpirationPeriod,
}: ExpirationPeriodProps) {
  const [error, setError] = useState({
    month: NO_ERROR,
    year: NO_ERROR,
  });

  function checkMonthValidation(
    length: number,
    date: string,
    type: ExpirationPeriod
  ) {
    const validationFns = getMonthValidationFns(length, date);
    const validation = validationFns?.find((v) => v?.condition());
    setError((prev) => {
      return {
        ...prev,
        [type]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  function checkYearValidation(
    length: number,
    date: string,
    type: ExpirationPeriod
  ) {
    const validationFns = getYearValidationFns(length, date);
    const validation = validationFns?.find((v) => v?.condition());
    setError((prev) => {
      return {
        ...prev,
        [type]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  const errorMessage = getErrorMessage(
    error as Record<ExpirationPeriod, string>
  );

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          value={expirationPeriod.month}
          onChange={(e) => {
            checkMonthValidation(
              EXPIRATION_PERIOD_LENGTH,
              e.target.value,
              "month"
            );
            changeExpirationPeriod(EXPIRATION_PERIOD.MONTH, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={error.month !== NO_ERROR}
        ></Input>
        <Input
          value={expirationPeriod.year}
          onChange={(e) => {
            checkYearValidation(
              EXPIRATION_PERIOD_LENGTH,
              e.target.value,
              "year"
            );
            changeExpirationPeriod(EXPIRATION_PERIOD.YEAR, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="YY"
          isError={error.year !== NO_ERROR}
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
