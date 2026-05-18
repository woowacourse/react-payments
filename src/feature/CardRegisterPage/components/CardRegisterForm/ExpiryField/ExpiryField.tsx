import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import styled from "styled-components";
import {
  EXPIRY_INPUT_COUNT,
  EXPIRY_MONTH_LENGTH,
  EXPIRY_YEAR_LENGTH,
} from "../../../constants";
import { formatExpiryValue } from "../../../utils/expiryFormatter";
import { isNumericInput } from "../../../validators/input";
import useInputFocusGroup from "../../../../../hooks/useInputFocusGroup";
import useInputErrorState from "../../../../../hooks/useInputErrorState";
import {
  validateExpiryMonth,
  validateExpiryYear,
} from "../../../validators/expiryDate";

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  onExpiryMonthChange,
  onExpiryYearChange,
  formErrorMessage,
  clearFormErrorMessage,
}: {
  expiryMonth: string;
  expiryYear: string;
  onExpiryMonthChange: (value: string) => void;
  onExpiryYearChange: (value: string) => void;
  formErrorMessage: string | null;
  clearFormErrorMessage: () => void;
}) => {
  const {
    updateErrorMessage,
    clearErrorMessage,
    firstErrorIndex,
    firstErrorMessage,
    isTouched,
    touchField,
  } = useInputErrorState(EXPIRY_INPUT_COUNT);

  const { registerFocusRef, focusNext, focusPrevious } =
    useInputFocusGroup(EXPIRY_INPUT_COUNT);

  const handleMonthChange = (index: number, eValue: string) => {
    clearFormErrorMessage();
    const value = eValue.trim();

    if (!isNumericInput(value)) {
      return;
    }

    const { isValid, errorMessage } = validateExpiryMonth(value);
    // 여기서 isValid쓸건지 errorMessage 쓸건지 통일해야함

    if (value.length === EXPIRY_MONTH_LENGTH && errorMessage) {
      updateErrorMessage(index, errorMessage);
      return;
    }

    onExpiryMonthChange(value);

    if (isTouched[index] && isValid) {
      clearErrorMessage(index);
    }

    // 다음 포커싱
    if (value.length === EXPIRY_MONTH_LENGTH) {
      focusNext(index);
    }
  };

  const handleYearChange = (index: number, eValue: string) => {
    clearFormErrorMessage();
    const value = eValue.trim();

    if (!isNumericInput(value)) {
      return;
    }

    onExpiryYearChange(value);

    if (isTouched[index] && validateExpiryYear(value).isValid) {
      clearErrorMessage(index);
    }

    // 이전 포커싱
    if (value.length === 0) {
      focusPrevious(index);
    }
  };

  const handleMonthBlur = (index: number, eValue: string) => {
    touchField(index);

    const formattedValue = formatExpiryValue(eValue, "month");
    onExpiryMonthChange(formattedValue);

    const { errorMessage } = validateExpiryMonth(formattedValue);
    if (errorMessage) {
      updateErrorMessage(index, errorMessage);
    } else {
      clearErrorMessage(index);
    }
  };

  const handleYearBlur = (index: number, eValue: string) => {
    touchField(index);

    const formattedValue = formatExpiryValue(eValue, "year");
    onExpiryYearChange(formattedValue);

    const { errorMessage } = validateExpiryYear(formattedValue);
    if (errorMessage) {
      updateErrorMessage(index, errorMessage);
    } else {
      clearErrorMessage(index);
    }
  };

  return (
    <StyledField>
      <Label htmlFor="expiry-month">유효기간</Label>
      <InputWrapper>
        <ExpiryInput
          ref={(node) => {
            registerFocusRef(0, node);
          }}
          id="expiry-month"
          value={expiryMonth}
          maxLength={EXPIRY_MONTH_LENGTH}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleMonthChange(0, e.target.value)}
          onBlur={(e) => handleMonthBlur(0, e.target.value)}
          autoFocus
        />
        <ExpiryInput
          ref={(node) => {
            registerFocusRef(1, node);
          }}
          id="expiry-year"
          value={expiryYear}
          maxLength={EXPIRY_YEAR_LENGTH}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleYearChange(1, e.target.value)}
          onBlur={(e) => handleYearBlur(1, e.target.value)}
        />
      </InputWrapper>

      <ErrorMessage>
        {formErrorMessage ? formErrorMessage : firstErrorMessage}
      </ErrorMessage>
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const ExpiryInput = styled(Input)`
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

export default ExpiryField;
