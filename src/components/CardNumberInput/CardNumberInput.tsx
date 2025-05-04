import styled from '@emotion/styled';
import Input from '../Input/Input';
import HelperText from '../HelperText/HelperText';
import { useEffect, useRef } from 'react';
import { HandleInputParams, InputProps } from '../../types/input';
import useValidation from '../../hooks/useValidation';

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

const INITIAL_ERROR_STATES = Array.from({ length: 4 }, () => false);
const VALID_LENGTH = 4;

const CardNumberInput = ({ values, onChange, onValidChange }: InputProps) => {
  const { error, validate } = useValidation(INITIAL_ERROR_STATES, VALID_LENGTH);
  const { state: errorState, message: errorMessage } = error;

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
