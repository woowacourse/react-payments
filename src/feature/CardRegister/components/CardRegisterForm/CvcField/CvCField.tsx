import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import styled from "styled-components";
import {
  CVC_INPUT_COUNT,
  CVC_LENGTH,
  ERROR_MESSAGES,
} from "../../../constants";
import { isCvcLengthValid } from "../../../validators/cvc";
import { isNumericInput } from "../../../validators/input";
import useInputErrorState from "../../../../../hooks/useInputErrorState";

const CvcField = ({
  cvcNumber,
  onCvcNumberChange,
}: {
  cvcNumber: string;
  onCvcNumberChange: (value: string) => void;
}) => {
  const {
    updateErrorMessage,
    clearErrorMessage,
    firstErrorIndex,
    firstErrorMessage,
    isTouched,
    touchField,
  } = useInputErrorState(CVC_INPUT_COUNT);

  const handleCvcChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!isNumericInput(value)) {
      return;
    }

    onCvcNumberChange(value);

    if (isTouched[index] && isCvcLengthValid(value)) {
      clearErrorMessage(index);
    }
  };

  const handleCvcBlur = (index: number, eValue: string) => {
    const value = eValue.trim();

    touchField(index);

    if (!isCvcLengthValid(value)) {
      updateErrorMessage(index, ERROR_MESSAGES.cvc);
      return;
    }

    clearErrorMessage(index);
  };

  return (
    <StyledField>
      <Label htmlFor="cvc">CVC</Label>
      <InputWrapper>
        <CvcInput
          id="cvc"
          value={cvcNumber}
          maxLength={CVC_LENGTH}
          inputMode="numeric"
          placeholder="123"
          strokeMode={0 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleCvcChange(0, e.target.value)}
          onBlur={(e) => handleCvcBlur(0, e.target.value)}
          autoFocus
        />
      </InputWrapper>
      <ErrorMessage>{firstErrorMessage}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const CvcInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default CvcField;
