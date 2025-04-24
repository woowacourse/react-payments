import Input from "../../shared/input/Input";
import { ExpirationPeriod } from "../../\btypes/index.types";
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
  expirationPeriod: {
    values: Record<ExpirationPeriod, string>;
    changeValues: (expirationPeriod: ExpirationPeriod, date: string) => void;
  };
  monthError: {
    error: Record<"month", string>;
    checkValidation: ({
      length,
      value,
      type,
    }: {
      length: number;
      value: string;
      type: "month";
    }) => void;
    getErrorMessage: () => string | undefined;
  };
  yearError: {
    error: Record<"year", string>;
    checkValidation: ({
      length,
      value,
      type,
    }: {
      length: number;
      value: string;
      type: "year";
    }) => void;
    getErrorMessage: () => string | undefined;
  };
};

function CardExpirationPeriodInputs({
  expirationPeriod,
  monthError,
  yearError,
}: ExpirationPeriodProps) {
  const errorMessage =
    monthError.getErrorMessage() || yearError.getErrorMessage();

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          value={expirationPeriod.values.month}
          onChange={(e) => {
            monthError.checkValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "month",
            });
            expirationPeriod.changeValues(
              EXPIRATION_PERIOD.MONTH,
              e.target.value
            );
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={monthError.error.month !== NO_ERROR}
        ></Input>
        <Input
          value={expirationPeriod.values.year}
          onChange={(e) => {
            yearError.checkValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "year",
            });
            expirationPeriod.changeValues(
              EXPIRATION_PERIOD.YEAR,
              e.target.value
            );
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="YY"
          isError={yearError.error.year !== NO_ERROR}
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
