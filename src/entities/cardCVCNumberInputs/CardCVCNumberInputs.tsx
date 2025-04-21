import Input from "../../shared/input/Input";
import { useState } from "react";
import { NO_ERROR } from "../../shared/constants/constant";
import { CVC_NUMBER_LENGTH } from "./CardCVCNumberInputs.constant";
import {
  getValidationFns,
  getErrorMessage,
} from "./CardCVCNumberInputs.domain";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (type: "CVCNumber", CVCNumber: string) => void;
};

function CardCVCNumberInputs({
  CVCNumber,
  changeCVCNumber,
}: CardCVCNumberSectionProps) {
  const [error, setError] = useState({ CVCNumber: NO_ERROR });

  const errorMessage = getErrorMessage(error);

  function checkValidation(
    length: number,
    CVCNumber: string,
    type: "CVCNumber"
  ) {
    const validationFns = getValidationFns(length, CVCNumber);

    const validation = validationFns.find((v) => v.condition());
    setError((prev) => {
      return {
        ...prev,
        [type]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          value={CVCNumber}
          onChange={(e) => {
            changeCVCNumber("CVCNumber", e.target.value);
            checkValidation(CVC_NUMBER_LENGTH, e.target.value, "CVCNumber");
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
