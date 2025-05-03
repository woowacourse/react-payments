import Input from '../../../../components/Input/Input';
import { checkInputValidation } from '../../../../validators/checkInputValidator';
import HelperText from '../../../../components/HelperText/HelperText';
import useInputValidation from '../../../../hooks/useInputValidation';
import { HandleInputParams } from '../../CardPage';
import { CVC } from '../../../../constants/settings';
import {
  StyledCVCInput,
  StyledHelperTextWrapper,
  StyledInputWrapper,
  StyledLabel,
} from './CVCInput.styles';

type CVCInputProps = {
  values: string[];
  onChange: ({ value, idx }: HandleInputParams) => void;
  onComplete?: () => void;
  onValidityChange?: (isValid: boolean) => void;
};

const CVCInput = ({ values, onChange, onComplete, onValidityChange }: CVCInputProps) => {
  const { isErrorStates, errorMessage, validate, validateAll } = useInputValidation(
    Array.from({ length: CVC.FIELDS_COUNT }, () => false),
    (value) => checkInputValidation(value, CVC.MAX_LENGTH)
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
    <StyledCVCInput>
      <StyledLabel htmlFor="cvc">CVC</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => handleChange({ value: e.target.value, idx })}
            maxLength={CVC.MAX_LENGTH}
            placeholder={CVC.PLACEHOLDER}
            isError={isErrorStates[idx]}
            id="cvc"
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
