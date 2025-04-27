import Input from "../../../shared/input/Input";
import { CVC_NUMBER_LENGTH } from "../constants/CardCVCNumberInputs.constant";
import { CardCVCNumberSectionProps } from "../types/CardCVCNumber.types";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import useAutoFocus from "../../hooks/useAutoFocus";

function CardCVCNumberInputs({
  CVCNumber,
  CVCError,
}: CardCVCNumberSectionProps) {
  const errorMessage = CVCError.getErrorMessage();

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
          value={CVCNumber.values.CVCNumber}
          onChange={(e) => {
            CVCNumber.changeValues("CVCNumber", e.target.value);
            CVCError.checkValidation({
              length: CVC_NUMBER_LENGTH,
              value: e.target.value,
              type: "CVCNumber",
            });
            handleAutoFocus(e, 0);
          }}
          isError={CVCError.isError()}
          width="100%"
          maxLength={CVC_NUMBER_LENGTH}
          placeholder="123"
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardCVCNumberInputs;
