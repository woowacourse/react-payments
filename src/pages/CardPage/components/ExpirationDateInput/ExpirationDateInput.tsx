import Input from '../../../../components/Input/Input';
import HelperText from '../../../../components/HelperText/HelperText';
import { HandleInputParams } from '../../CardPage';
import { EXPIRATION_DATE } from '../../../../constants/settings';
import useExpirationDateValidation from '../../../../hooks/useExpirationDateValidation';
import useInputRef from '../../../../hooks/useInputRef';
import {
  StyledExpirationDateInput,
  StyledHelperTextWrapper,
  StyledInputWrapper,
  StyledLabel,
} from './ExpirationDateInput.styles';

type ExpirationDateInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
  onComplete?: () => void;
  onValidityChange?: (isValid: boolean) => void;
};

const ExpirationDateInput = ({
  values,
  onChange,
  onComplete,
  onValidityChange,
}: ExpirationDateInputProps) => {
  const { setInputRef, focusNextInput } = useInputRef(EXPIRATION_DATE.FIELDS_COUNT);
  const { isErrorStates, errorMessage, validate, validateAll } =
    useExpirationDateValidation(values);

  const handleChange = ({ value, idx }: { value: string; idx: number }) => {
    onChange({ value, idx });
    validate({ value, idx });

    const updatedValues = [...values];
    updatedValues[idx] = value;

    const isValid = validateAll(updatedValues).every((isError) => !isError);

    onValidityChange?.(isValid);

    if (isValid) {
      onComplete?.();
    }

    if (value.length === EXPIRATION_DATE.MAX_LENGTH) {
      focusNextInput(idx);
    }
  };

  return (
    <StyledExpirationDateInput>
      <StyledLabel htmlFor="expiration-date-0">유효기간</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ value: e.target.value, idx })}
            maxLength={EXPIRATION_DATE.MAX_LENGTH}
            placeholder={EXPIRATION_DATE.PLACEHOLDER[idx]}
            isError={isErrorStates[idx]}
            id={`expiration-date-${idx}`}
            ref={(el) => setInputRef(el, idx)}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && (
          <HelperText text={errorMessage} type={'isError'} aria-live="polite" />
        )}
      </StyledHelperTextWrapper>
    </StyledExpirationDateInput>
  );
};

export default ExpirationDateInput;
