import styled from '@emotion/styled';
import Input from '../../../../components/Input/Input';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';
import { checkInputValidation } from '../../../../validators/checkInputValidator';
import { CARD_NUMBER } from '../../../../constants/settings';

type CardNumberInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
};

const CardNumberInput = ({ values, onChange }: CardNumberInputProps) => {
  const { isErrorStates, errorMessage, validate } = useInputValidation(
    Array.from({ length: CARD_NUMBER.FIELDS_COUNT }, () => false),
    (value) => checkInputValidation(value, CARD_NUMBER.MAX_LENGTH)
  );

  return (
    <StyledCardNumberInput>
      <StyledLabel htmlFor="number-card">카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => onChange({ value: e.target.value, idx })}
            onBlur={(e) => validate({ value: e.target.value, idx })}
            maxLength={CARD_NUMBER.MAX_LENGTH}
            placeholder={CARD_NUMBER.PLACEHOLDER}
            isError={isErrorStates[idx]}
            id="number-card"
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
