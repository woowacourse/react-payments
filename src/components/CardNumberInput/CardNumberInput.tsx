import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../../pages/CardPage/CardPage';
import HelperText from '../HelperText/HelperText';
import { inputValidation } from '../../validators/inputValidator';
import useInputValidation from '../../hooks/useInputValidation';
import { useCallback, useEffect, useRef } from 'react';
import { InputProps } from '../../types/input';

const StyledCardNumberInput = styled.div`
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

const validationCallback = (e: React.ChangeEvent<HTMLInputElement>) => inputValidation(e, 4);
const CardNumberInput = ({ values, onChange, onValidChange }: InputProps) => {
  const { errorState, errorMessage, validate } = useInputValidation(
    Array.from({ length: 4 }, () => false),
    validationCallback
  );

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const isValid =
      errorState.every((error) => error === false) && values.every((value) => value.length === 4);
    onValidChange(isValid);
  }, [errorState, values, onValidChange]);

  const handleChange = ({ e, idx }: HandleInputParams) => {
    onChange({ e, idx });
    validate({ e, idx });
    if (e.target.value.length === 4 && idx < 3) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  return (
    <StyledCardNumberInput>
      <StyledLabel>카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value, idx) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ e, idx })}
            maxLength={4}
            placeholder={'1234'}
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
    </StyledCardNumberInput>
  );
};

export default CardNumberInput;
