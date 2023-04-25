import { ChangeEvent, memo } from 'react';
import { SECURITY_CODE_MAX_LENGTH, SECURITY_CODE_MIN_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/common/useError';

interface CardSecurityCodeProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
}

function CardSecurityCode({ onInputChange, value, isValid }: CardSecurityCodeProps) {
  const { isError, handleError, removeError } = useError(isValid);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputChange(event);
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
        onBlur={handleError}
      />
    </InputContainer>
  );
}

export default memo(CardSecurityCode);
