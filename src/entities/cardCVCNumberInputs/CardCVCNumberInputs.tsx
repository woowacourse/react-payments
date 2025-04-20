import Input from "../../shared/input/Input";
import { useState } from "react";
import { isValidLength, isValidNumber } from "../../util/validation";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (CVCNumber: string) => void;
};

const CVC_NUMBER_LENGTH = 3;

const errorMessage = {
  length: "3자리만 입력 가능합니다.",
  number: "숫자만 입력 가능합니다.",
};

function getValidationFns(length: number, CVCNumber: string) {
  return [
    { condition: () => CVCNumber === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(CVCNumber, length),
      errorMsg: errorMessage.length,
    },
    {
      condition: () => !isValidNumber(CVCNumber),
      errorMsg: errorMessage.number,
    },
    { condition: () => true, errorMsg: NO_ERROR },
  ];
}

function getErrorMessage(error: string) {
  return error;
}

function CardCVCNumberInputs({
  CVCNumber,
  changeCVCNumber,
}: CardCVCNumberSectionProps) {
  const [error, setError] = useState(NO_ERROR);

  const errorMessage = getErrorMessage(error);

  function checkValidation(length: number, CVCNumber: string) {
    const validationFns = getValidationFns(length, CVCNumber);

    const validation = validationFns.find((v) => v.condition());
    setError(validation?.errorMsg || NO_ERROR);
  }

  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          value={CVCNumber}
          onChange={(e) => {
            changeCVCNumber(e.target.value);
            checkValidation(CVC_NUMBER_LENGTH, e.target.value);
          }}
          isError={error !== NO_ERROR}
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
