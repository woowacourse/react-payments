import styled from '@emotion/styled';
import Input from '../Input/Input';
import HelperText from '../HelperText/HelperText';
import { useEffect } from 'react';
import { HandleInputParams, InputProps } from '../../types/input';
import useValidation from '../../hooks/useValidation';

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

const INITIAL_ERROR_STATES = [false];
const VALID_LENGTH = 3;

const CVCInput = ({ values, onChange, onValidChange }: InputProps) => {
  const { error, validate } = useValidation(INITIAL_ERROR_STATES, VALID_LENGTH);

  const { state: errorState, message: errorMessage } = error;

  useEffect(() => {
    const isValid =
      errorState.every((error) => error === false) && values.every((value) => value.length === 3);
    onValidChange(isValid);
  }, [errorState, values, onValidChange]);

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
            errorState={errorState[idx]}
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
