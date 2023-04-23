import { ChangeEvent, FocusEvent, useState } from 'react';
import { SECURITY_CODE_MAX_LENGTH, SECURITY_CODE_MIN_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';

interface CardSecurityCodeProps {
  handleInputChange: (name: string, value: string) => void;
  validateInput: (key: string, value: string | string[]) => boolean | undefined;
  value: string;
}

function CardSecurityCode({ handleInputChange, validateInput, value }: CardSecurityCodeProps) {
  const [isError, setIsError] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isError) setIsError(false);

    handleInputChange(event.target.name, event.target.value);
    validateInput(event.target.name, event.target.value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isValid = validateInput(event.target.name, event.target.value);
    setIsError(!isValid);
  };

  return (
    <InputContainer
      supportingText={{
        default: '카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요',
        error: '카드에 표시된 CVC/CVV 번호와 동일하게 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="securityCode" required>
        보안 코드 (CVC/CVV)
      </Label>
      <Input
        type="password"
        id="securityCode"
        name="securityCode"
        value={value}
        minLength={SECURITY_CODE_MIN_LENGTH}
        maxLength={SECURITY_CODE_MAX_LENGTH}
        autoComplete="cc-csc"
        inputMode="numeric"
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardSecurityCode;
