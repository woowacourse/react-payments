import styled from '@emotion/styled';
import Input from '../Input/Input';
import HelperText from '../HelperText/HelperText';
import useExpDateValidation from '../../hooks/useExpDateValidation';
import { expirationDateValidation } from '../../validators/expirationDateValidator';
import { useEffect, useRef } from 'react';
import { HandleInputParams, InputProps } from '../../types/input';

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

const INITIAL_ERROR_STATES = [false, false];

const validationCallback = (values: string[], params: HandleInputParams, validLength: number) =>
  expirationDateValidation(values, params, validLength);

const ExpirationDateInput = ({ values, onChange, onValidChange }: InputProps) => {
  const placeHolders = ['MM', 'YY'];

  const { errorState, errorMessage, validateExpirationDate } = useExpDateValidation(
    INITIAL_ERROR_STATES,
    values,
    validationCallback
  );

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const isValid =
      errorState.every((error) => error === false) && values.every((value) => value.length === 2);
    onValidChange(isValid);
  }, [errorState, values, onValidChange]);

  const handleChange = ({ e, idx }: HandleInputParams) => {
    onChange({ e, idx });
    validateExpirationDate({ e, idx });
    if (e.target.value.length === 2 && idx < 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  return (
    <StyledExpirationDateInput>
      <StyledLabel>유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value, idx) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ e, idx })}
            maxLength={2}
            placeholder={placeHolders[idx]}
            errorState={errorState[idx]}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
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
