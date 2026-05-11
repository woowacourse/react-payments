import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import useFieldValidation from '../../../../common/hooks/useFieldValidation';
import {
  isWithinMaxLength,
  isExactLength,
  isNumeric,
  isValidMonth,
} from '../../utils/validator';
import { useRef, useState } from 'react';
import {
  EXPIRY_LENGTH,
  validateExpiryMonth,
  validateExpiryYear,
} from '../../utils/cardFormValidator';

const ExpiryField = ({
  autoFocus = false,
  expiryMonth,
  expiryYear,
  handleExpiryMonthChange,
  handleExpiryYearChange,
}: {
  autoFocus?: boolean;
  expiryMonth: string;
  expiryYear: string;
  handleExpiryMonthChange: (month: string) => void;
  handleExpiryYearChange: (year: string) => void;
}) => {
  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: [expiryMonth, expiryYear],
    validate: (value, index) => {
      if (index === 0) {
        return validateExpiryMonth(value);
      }

      return validateExpiryYear(value);
    },
  });

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const focusNextInput = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };

  const [monthErrorMessage, setMonthErrorMessage] = useState('');

  const handleMonthChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, EXPIRY_LENGTH)) return;
    if (isExactLength(value, EXPIRY_LENGTH) && !isValidMonth(value)) {
      setMonthErrorMessage('월은 01부터 12까지 입력해 주세요');
      touch(0);
      return;
    }

    setMonthErrorMessage('');
    handleExpiryMonthChange(value);

    if (value.length === EXPIRY_LENGTH) focusNextInput(0);
  };

  const handleYearChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, EXPIRY_LENGTH)) return;

    handleExpiryYearChange(value);
  };

  const fillZero = (value: string, expiryType: 'month' | 'year'): string => {
    if (expiryType === 'month' && value.length === 1 && value !== '0') {
      return `0${value}`;
    }
    if (expiryType === 'year' && value.length === 1) {
      return `0${value}`;
    }

    return value;
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: 'month' | 'year',
  ) => {
    if (expiryType === 'month') {
      const filledValue = fillZero(eValue, expiryType);
      handleExpiryMonthChange(filledValue);

      if (validateExpiryMonth(filledValue) === null) setMonthErrorMessage('');
    }

    touch(index);
  };

  return (
    <StyledField>
      <Label value="유효기간" />
      <InputWrapper>
        <ExpiryInput
          ref={(element) => {
            inputRefs.current[0] = element;
          }}
          value={expiryMonth}
          autoFocus={autoFocus}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => handleMonthChange(e.target.value)}
          onBlur={(e) => handleExpiryBlur(0, e.target.value, 'month')}
        />
        <ExpiryInput
          ref={(element) => {
            inputRefs.current[1] = element;
          }}
          value={expiryYear}
          maxLength={2}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => handleYearChange(e.target.value)}
          onBlur={(e) => handleExpiryBlur(1, e.target.value, 'year')}
        />
      </InputWrapper>

      <ErrorMessage>{monthErrorMessage || errorMessage}</ErrorMessage>
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
