import styled from '@emotion/styled';
import Input from '../../../../components/Input/Input';
import { useState } from 'react';

import HelperText from '../../../../components/HelperText/HelperText';
import {
  checkTotalExpirationDate,
  checkValidMonth,
  checkValidYear,
} from '../../../../validators/expirationDateValidator';
import { checkNumber, checkValidLength } from '../../../../validators/checkInputValidator';
import { HandleInputParams } from '../../CardPage';
import { EXPIRATION_DATE } from '../../../../constants/settings';

type ExpirationDateInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
};

const ExpirationDateInput = ({ values, onChange }: ExpirationDateInputProps) => {
  const [isError, setIsError] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const checkValidExpirationDate = ({ value, idx }: HandleInputParams) => {
    try {
      checkTotalExpirationDate(values[0], values[1]);
    } catch (error) {
      setIsError((prev) => {
        const updated = [...prev];
        updated[0] = true;
        return updated;
      });

      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return;
    }

    try {
      checkNumber(value);
      if (idx === 0 && values[0].length === 1) {
        values[0] = values[0].padStart(2, '0');
      } else {
        checkValidLength(value, 2);
      }

      if (idx === 0) {
        checkValidMonth(value);
      } else if (idx === 1) {
        checkValidYear(value);
      }

      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = false;
        if (updated.every((errorState) => errorState === false)) {
          setErrorMessage('');
        }
        return updated;
      });
    } catch (error) {
      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = true;
        return updated;
      });

      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <StyledExpirationDateInput>
      <StyledLabel>유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ value: e.target.value, idx })}
            onBlur={(e) => checkValidExpirationDate({ value: e.target.value, idx })}
            maxLength={EXPIRATION_DATE.MAX_LENGTH}
            placeholder={EXPIRATION_DATE.PLACEHOLDER[idx]}
            isError={isError[idx]}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledExpirationDateInput>
  );
};

export default ExpirationDateInput;

const StyledExpirationDateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;
