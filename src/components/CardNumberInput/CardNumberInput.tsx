import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import HelperText from '../HelperText/HelperText';
import { inputValidation } from '../../validators/inputValidator';
import useInputValidation from '../../hooks/useInputValidation';
import { useCallback, useRef } from 'react';

type CardNumberInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

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

const CardNumberInput = ({ values, onChange }: CardNumberInputProps) => {
  const validationCallback = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => inputValidation(e, 4),
    []
  );

  const { isError, errorMessage, validate } = useInputValidation(
    Array.from({ length: 4 }, () => false),
    validationCallback
  );

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = ({ e, idx }: HandleInputParams) => {
    onChange({ e, idx });
    if (e.target.value.length === 4 && idx < 3) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  return (
    <StyledCardNumberInput>
      <StyledLabel>카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ e, idx })}
            onBlur={(e) => validate({ e, idx })}
            maxLength={4}
            placeholder={'1234'}
            isError={isError[idx]}
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
