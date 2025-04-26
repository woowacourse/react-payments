import styled from '@emotion/styled';
import Input from '../Input/Input';
import { inputValidation } from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';
import useInputValidation from '../../hooks/useInputValidation';
import { useCallback, useEffect } from 'react';
import { InputProps } from '../../types/input';
import { HandleInputParams } from '../../pages/CardPage/CardPage';

const StyledPasswordInput = styled.div`
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

const PasswordInput = ({ values, onChange, onValidChange }: InputProps) => {
  const validationCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => inputValidation(e, 2),
    []
  );
  const { isError, errorMessage, validate } = useInputValidation(
    [false, false],
    validationCallback
  );

  useEffect(() => {
    const isValid =
      isError.every((error) => error === false) && values.every((value) => value.length === 2);
    onValidChange(isValid);
  }, [isError, values, onValidChange]);

  const handleChange = ({ e, idx }: HandleInputParams) => {
    onChange({ e, idx });
    validate({ e, idx });
  };

  return (
    <StyledPasswordInput>
      <StyledLabel>비밀번호 앞 2자리</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ e, idx })}
            maxLength={2}
            placeholder={'**'}
            isError={isError[idx]}
            type="password"
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledPasswordInput>
  );
};

export default PasswordInput;
