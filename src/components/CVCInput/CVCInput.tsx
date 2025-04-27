import styled from '@emotion/styled';
import Input from '../Input/Input';
import { inputValidation } from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';
import useInputValidation from '../../hooks/useInputValidation';
import { useCallback, useEffect } from 'react';
import { InputProps } from '../../types/input';
import { HandleInputParams } from '../../pages/CardPage/CardPage';

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

const CVCInput = ({ values, onChange, onValidChange }: InputProps) => {
  const validationCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => inputValidation(e, 3),
    []
  );
  const { isError, errorMessage, validate } = useInputValidation([false], validationCallback);

  useEffect(() => {
    const isValid =
      isError.every((error) => error === false) && values.every((value) => value.length === 3);
    onValidChange(isValid);
  }, [isError, values, onValidChange]);

  const handleChange = ({ e, idx }: HandleInputParams) => {
    onChange({ e, idx });
    validate({ e, idx });
  };

  return (
    <StyledCVCInput>
      <StyledLabel>CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value, idx) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ e, idx })}
            maxLength={3}
            placeholder={'123'}
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
