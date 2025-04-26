import Input from "../../shared/input/Input";
import { ExpirationPeriod } from "../../types/index.types.ts";
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
import useAutoFocus from "../../features/hooks/useAutoFocus.ts";

type ExpirationPeriodProps = {
  expirationPeriod: {
    values: Record<ExpirationPeriod, string>;
    changeValues: (expirationPeriod: ExpirationPeriod, date: string) => void;
    isFullFilled: () => boolean;
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
    isError: () => boolean;
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
    isError: () => boolean;
  };
};

function CardExpirationPeriodInputs({
  expirationPeriod,
  monthError,
  yearError,
}: ExpirationPeriodProps) {
  const errorMessage =
    monthError.getErrorMessage() || yearError.getErrorMessage();

  const { inputRefs, handleKeyDown } = useAutoFocus({
    inputCount: 2,
    inputMaxLength: EXPIRATION_PERIOD_LENGTH,
  });

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
          onKeyDown={(e) => handleKeyDown(e, 0)}
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
          ref={inputRefs[1]}
          onKeyDown={(e) => handleKeyDown(e, 1)}
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
