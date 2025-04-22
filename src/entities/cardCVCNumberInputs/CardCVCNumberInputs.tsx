import Input from "../../shared/input/Input";
import { NO_ERROR } from "../../shared/constants/constant";
import { CVC_NUMBER_LENGTH } from "./CardCVCNumberInputs.constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (type: "CVCNumber", CVCNumber: string) => void;
  error: Record<"CVCNumber", string>;
  checkValidation: ({
    length,
    value,
    type,
  }: {
    length: number;
    value: string;
    type: "CVCNumber";
  }) => void;
  getErrorMessage: () => string | undefined;
};

function CardCVCNumberInputs({
  CVCNumber,
  changeCVCNumber,
  error,
  checkValidation,
  getErrorMessage,
}: CardCVCNumberSectionProps) {
  const errorMessage = getErrorMessage();

  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          value={CVCNumber}
          onChange={(e) => {
            changeCVCNumber("CVCNumber", e.target.value);
            checkValidation({
              length: CVC_NUMBER_LENGTH,
              value: e.target.value,
              type: "CVCNumber",
            });
          }}
          isError={error.CVCNumber !== NO_ERROR}
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
