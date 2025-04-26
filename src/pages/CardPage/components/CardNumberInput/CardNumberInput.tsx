import Input from '../../../../components/Input/Input';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';
import { checkInputValidation } from '../../../../validators/checkInputValidator';
import { CARD_NUMBER } from '../../../../constants/settings';
import useInputRef from '../../../../hooks/useInputRef';
import {
  StyledCardNumberInput,
  StyledHelperTextWrapper,
  StyledInputWrapper,
  StyledLabel,
} from './CardNumberInput.styles';

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
  const { setInputRef, focusNextInput } = useInputRef(CARD_NUMBER.FIELDS_COUNT);
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

    if (value.length === CARD_NUMBER.MAX_LENGTH) {
      focusNextInput(idx);
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
            ref={(el) => setInputRef(el, idx)}
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
