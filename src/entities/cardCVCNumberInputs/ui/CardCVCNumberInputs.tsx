import Input from "../../../shared/input/ui/Input";
import { CVC_NUMBER_LENGTH } from "../constants/CardCVCNumberInputs.constant";
import { CardCVCNumberSectionProps } from "../types/CardCVCNumber.types";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import useAutoFocus from "../../hooks/useAutoFocus";

function CardCVCNumberInputs({
  values,
  changeValues,
  checkValidation,
  errorMessages,
  isError,
}: CardCVCNumberSectionProps) {
  const error = errorMessages.CVCNumber;

  const { inputRefs, handleAutoFocus } = useAutoFocus({
    inputCount: 1,
    inputMaxLength: CVC_NUMBER_LENGTH,
  });

  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
          value={values.CVCNumber}
          onChange={(e) => {
            changeValues("CVCNumber", e.target.value);
            checkValidation({
              length: CVC_NUMBER_LENGTH,
              value: e.target.value,
              type: "CVCNumber",
            });
            handleAutoFocus(e, 0);
          }}
          error={isError}
          width="100%"
          maxLength={CVC_NUMBER_LENGTH}
          placeholder="123"
        />
      </StyledInputWrap>

      {errorMessages && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledContainer>
  );
}

export default CardCVCNumberInputs;
