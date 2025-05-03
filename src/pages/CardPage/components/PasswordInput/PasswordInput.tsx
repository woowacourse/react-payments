import Input from '../../../../components/Input/Input';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';
import { checkPasswordValidation } from '../../../../validators/checkInputValidator';
import { PASSWORD } from '../../../../constants/settings';
import {
  StyledCardNumberInput,
  StyledHelperTextWrapper,
  StyledInputWrapper,
  StyledLabel,
} from './PasswordInput.styles';

type CardNumberInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
  onComplete?: () => void;
  onValidityChange?: (isValid: boolean) => void;
};

const PasswordInput = ({
  values,
  onChange,
  onComplete,
  onValidityChange,
}: CardNumberInputProps) => {
  const { isErrorStates, errorMessage, validate, validateAll } = useInputValidation(
    Array.from({ length: PASSWORD.FIELDS_COUNT }, () => false),
    (value) => checkPasswordValidation(value, PASSWORD.MAX_LENGTH)
  );

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
  };

  return (
    <StyledCardNumberInput>
      <StyledLabel htmlFor="password">비밀번호 앞 2자리</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            type="password"
            onChange={(e) => handleChange({ value: e.target.value, idx })}
            maxLength={PASSWORD.MAX_LENGTH}
            isError={isErrorStates[idx]}
            id="password"
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledCardNumberInput>
  );
};

export default PasswordInput;
