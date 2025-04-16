import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import { useState } from 'react';
import {
  checkNumber,
  checkTotalExpirationDate,
  checkValidLength,
  checkValidMonth,
  checkValidYear,
} from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';

type ExpirationDateInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

const StyledExpirationDateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const ExpirationDateInput = ({ values, onChange }: ExpirationDateInputProps) => {
  const placeHolders = ['MM', 'YY'];

  const [isError, setIsError] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const checkValidExpirationDate = ({ e, idx }: HandleInputParams) => {
    const expirationDate = e.target.value;

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
      checkNumber(expirationDate);
      checkValidLength(expirationDate, 2);

      if (idx === 0) {
        checkValidMonth(expirationDate);
      } else if (idx === 1) {
        checkValidYear(expirationDate);
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
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => checkValidExpirationDate({ e, idx })}
            maxLength={2}
            placeHolder={placeHolders[idx]}
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
