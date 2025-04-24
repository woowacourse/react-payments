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
  onComplete?: () => void;
  onValidityChange?: (isValid: boolean) => void;
};

const CardNumberInput = ({
  values,
  onChange,
  onComplete,
  onValidityChange,
}: CardNumberInputProps) => {
  const { isErrorStates, errorMessage, validate, validateAll } = useInputValidation(
    Array.from({ length: CARD_NUMBER.FIELDS_COUNT }, () => false),
    (value) => checkInputValidation(value, CARD_NUMBER.MAX_LENGTH)
  );

  const handleChange = ({ value, idx }: { value: string; idx: number }) => {
    onChange({ value, idx });
    validate({ value, idx });

    const updatedValues = [...values];
    updatedValues[idx] = value;

    const isValid = validateAll(updatedValues).every((isError) => !isError);

    if (onValidityChange) {
      onValidityChange(isValid);
    }

    if (onComplete && isValid) {
      onComplete();
    }
  };

  return (
    <StyledCardNumberInput>
      <StyledLabel htmlFor="number-card-0">카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ value: e.target.value, idx })}
            maxLength={CARD_NUMBER.MAX_LENGTH}
            placeholder={CARD_NUMBER.PLACEHOLDER}
            isError={isErrorStates[idx]}
            id={`number-card-${idx}`}
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
