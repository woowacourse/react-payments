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
  values,
  changeValues,
  error,
  monthCheckValidation,
  yearCheckValidation,
}: ExpirationPeriodProps) {
  const errorMessage = error.month || error.year;

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
          value={values.month}
          onChange={(e) => {
            monthCheckValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "month",
            });
            changeValues(EXPIRATION_PERIOD.MONTH, e.target.value);
            handleAutoFocus(e, 0);
          }}
          width="50%"
          maxLength={EXPIRATION_PERIOD_LENGTH}
          placeholder="MM"
          isError={error.month !== NO_ERROR}
        ></Input>
        <Input
          ref={inputRefs[1]}
          value={values.year}
          onChange={(e) => {
            yearCheckValidation({
              length: EXPIRATION_PERIOD_LENGTH,
              value: e.target.value,
              type: "year",
            });
            changeValues(EXPIRATION_PERIOD.YEAR, e.target.value);
            handleAutoFocus(e, 1);
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
