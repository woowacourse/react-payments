import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../../pages/CardPage/CardPage';
import HelperText from '../HelperText/HelperText';
import useExpDateValidation from '../../hooks/useExpDateValidation';
import { expirationDateValidation } from '../../validators/expirationDateValidator';
import { useCallback, useEffect } from 'react';
import { InputProps } from '../../types/input';

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

const ExpirationDateInput = ({ values, onChange, onValidChange }: InputProps) => {
  const placeHolders = ['MM', 'YY'];
  const validationCallback = useCallback(
    (values: string[], params: HandleInputParams, validLength: number) =>
      expirationDateValidation(values, params, validLength),
    []
  );
  const { isError, errorMessage, validateExpirationDate } = useExpDateValidation(
    [false, false],
    values,
    validationCallback
  );

  useEffect(() => {
    const isValid =
      isError.every((error) => error === false) && values.every((value) => value.length === 2);
    onValidChange(isValid);
  }, [isError, values, onValidChange]);

  return (
    <StyledExpirationDateInput>
      <StyledLabel>유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => validateExpirationDate({ e, idx })}
            maxLength={2}
            placeholder={placeHolders[idx]}
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
