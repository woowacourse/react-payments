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
  expirationPeriod: Record<ExpirationPeriod, string>;
  changeExpirationPeriod: (
    expirationPeriod: ExpirationPeriod,
    date: string
  ) => void;
  monthError: Record<"month", string>;
  checkMonthValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "month";
  }) => void;
  getMonthErrorMessage: () => string | undefined;
  yearError: Record<"year", string>;
  checkYearValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "year";
  }) => void;
  getYearErrorMessage: () => string | undefined;
};

function CardExpirationPeriodInputs({
  expirationPeriod,
  changeExpirationPeriod,
  monthError,
  checkMonthValidation,
  getMonthErrorMessage,
  yearError,
  checkYearValidation,
  getYearErrorMessage,
}: ExpirationPeriodProps) {
  const errorMessage = getMonthErrorMessage() || getYearErrorMessage();

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          value={expirationPeriod.month}
          onChange={(e) => {
            checkMonthValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "month",
            });
            changeExpirationPeriod(EXPIRATION_PERIOD.MONTH, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={monthError.month !== NO_ERROR}
        ></Input>
        <Input
          value={expirationPeriod.year}
          onChange={(e) => {
            checkYearValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "year",
            });
            changeExpirationPeriod(EXPIRATION_PERIOD.YEAR, e.target.value);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="YY"
          isError={yearError.year !== NO_ERROR}
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
