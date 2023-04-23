import { ChangeEvent, FocusEvent } from 'react';
import { CardInputValidation } from '../../../types';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import InputContainer from '../../common/InputContainer/InputContainer';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';
import { SECURITY_CODE_MAX_LENGTH, SECURITY_CODE_MIN_LENGTH } from '../../../constants';

interface CardSecurityCodeProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function CardSecurityCode({ changeInputValidation, onInputChange, value }: CardSecurityCodeProps) {
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.securityCode,
    changeInputValidation,
  });

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    handleError(event.target.name, event.target.value);
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
        onChange={onInputChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardSecurityCode;
