import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import HelperText from '../HelperText/HelperText';
import { inputValidation } from '../../validators/inputValidator';
import useInputValidation from '../../hooks/useInputValidation';

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
  const { isError, errorMessage, validate } = useInputValidation(
    Array.from({ length: 4 }, () => false),
    (e) => inputValidation(e, 4)
  );

  return (
    <StyledCardNumberInput>
      <StyledLabel>카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => validate({ e, idx })}
            maxLength={4}
            placeholder={'1234'}
            isError={isError[idx]}
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
