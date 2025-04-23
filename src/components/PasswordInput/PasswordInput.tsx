import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import { inputValidation } from '../../validators/inputValidator';
import HelperText from '../HelperText/HelperText';
import useInputValidation from '../../hooks/useInputValidation';
import { useCallback } from 'react';

type PasswordInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

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

const PasswordInput = ({ values, onChange }: PasswordInputProps) => {
  const validationCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => inputValidation(e, 2),
    []
  );
  const { isError, errorMessage, validate } = useInputValidation([false], validationCallback);

  return (
    <StyledPasswordInput>
      <StyledLabel>비밀번호 앞 2자리</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => validate({ e, idx })}
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
