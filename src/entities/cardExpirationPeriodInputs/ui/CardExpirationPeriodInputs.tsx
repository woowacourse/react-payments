import Input from "../../../shared/input/ui/Input";
import { NO_ERROR } from "../../../shared/constants/values.ts";
import {
  EXPIRATION_PERIOD,
  EXPIRATION_PERIOD_LENGTH,
} from "../constants/CardExpirationPeriodInputs.constant.ts";
import { ExpirationPeriodProps } from "../types/CardExpirationPeriod.types.ts";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import useAutoFocus from "../../hooks/useAutoFocus.ts";

function CardExpirationPeriodInputs({
  expirationPeriod,
  monthError,
  yearError,
}: ExpirationPeriodProps) {
  const errorMessage =
    monthError.getErrorMessage() || yearError.getErrorMessage();

  const { inputRefs, handleAutoFocus } = useAutoFocus({
    inputCount: 2,
    inputMaxLength: EXPIRATION_PERIOD_LENGTH,
  });

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
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
            handleAutoFocus(e, 0);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={monthError.error.month !== NO_ERROR}
        ></Input>
        <Input
          ref={inputRefs[1]}
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
            handleAutoFocus(e, 1);
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
