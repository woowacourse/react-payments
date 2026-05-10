import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import styled from "styled-components";
import {
  validateExceedTwoDigits,
  validateMonth,
  validateTwoDigits,
} from "../../../validators/expiryDate";
import {
  ERROR_MESSAGES,
  EXPIRY_INPUT_COUNT,
  EXPIRY_VALUE_LENGTH,
} from "../../../constants";
import {
  formatExpiryValue,
  type ExpiryType,
} from "../../../utils/expiryFormatter";
import { validateNumericInput } from "../../../validators/input";
import useInputFocusGroup from "../../../../../hooks/useInputFocusGroup";
import useInputErrorState from "../../../../../hooks/useInputErrorState";

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
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
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedTwoDigits(value)) {
      return;
    }

    if (value.length === EXPIRY_VALUE_LENGTH && !validateMonth(value)) {
      updateErrorMessage(index, ERROR_MESSAGES.expiryMonthRange);
      return;
    }

    setExpiryMonth(value);

    if (isTouched[index] && value.length === EXPIRY_VALUE_LENGTH) {
      clearErrorMessage(index);
    }

    // 다음 포커싱
    if (value.length === EXPIRY_VALUE_LENGTH) {
      focusNext(index);
    }
  };

  const handleYearChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedTwoDigits(value)) {
      return;
    }

    setExpiryYear(value);

    if (isTouched[index] && value.length === EXPIRY_VALUE_LENGTH) {
      clearErrorMessage(index);
    }

    // 이전 포커싱
    if (value.length === 0) {
      focusPrevious(index);
    }
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: ExpiryType,
  ) => {
    touchField(index);

    const formattedValue = formatExpiryValue(eValue, expiryType);

    if (expiryType === "month") {
      setExpiryMonth(formattedValue);
    }
    if (expiryType === "year") {
      setExpiryYear(formattedValue);
    }

    if (!validateTwoDigits(formattedValue)) {
      updateErrorMessage(index, ERROR_MESSAGES.expiryLength);
      return;
    }

    if (expiryType === "month" && !validateMonth(formattedValue)) {
      updateErrorMessage(index, ERROR_MESSAGES.expiryMonthRange);
      return;
    }

    clearErrorMessage(index);
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
          maxLength={EXPIRY_VALUE_LENGTH}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleMonthChange(0, e.target.value)}
          onBlur={(e) => handleExpiryBlur(0, e.target.value, "month")}
          autoFocus
        />
        <ExpiryInput
          ref={(node) => {
            registerFocusRef(1, node);
          }}
          id="expiry-month"
          value={expiryYear}
          maxLength={EXPIRY_VALUE_LENGTH}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleYearChange(1, e.target.value)}
          onBlur={(e) => handleExpiryBlur(1, e.target.value, "year")}
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
