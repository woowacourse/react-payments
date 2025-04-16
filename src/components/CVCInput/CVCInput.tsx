import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import { useState } from 'react';
import { checkNumber, checkValidLength } from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';

type CVCInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

const StyledCVCInput = styled.div`
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
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

const CVCInput = ({ values, onChange }: CVCInputProps) => {
  const [isError, setIsError] = useState([false]);
  const [errorMessage, setErrorMessage] = useState('');
  const checkValidCVC = ({ e, idx }: HandleInputParams) => {
    const CVCNumber = e.target.value;
    try {
      checkNumber(CVCNumber);
      checkValidLength(CVCNumber, 3);
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
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => checkValidCVC({ e, idx })}
            maxLength={3}
            placeHolder={'123'}
            isError={isError[idx]}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledCVCInput>
  );
};

export default CVCInput;
