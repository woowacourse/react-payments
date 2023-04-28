import { ChangeEvent, FocusEvent, memo } from 'react';
import { CardFormData, CardFormValidation } from '../../../types';
import { SECURITY_CODE_MAX_LENGTH, SECURITY_CODE_MIN_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { formatNumber } from '../../../utils/formatter';

interface CardSecurityCodeProps {
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
}

function CardSecurityCode({ isError, updateInputValue, updateInputError }: CardSecurityCodeProps) {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.value = formatNumber(target.value);
    updateInputValue('securityCode', target.value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    updateInputError('securityCode', event.target.value);
  };

  return (
    <InputContainer
      supportingText={{
        default: '카드 뒷면의 CVC/CVV 번호 3자리 또는 4자리 숫자를 입력해주세요',
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
        minLength={SECURITY_CODE_MIN_LENGTH}
        maxLength={SECURITY_CODE_MAX_LENGTH}
        autoComplete="cc-csc"
        inputMode="numeric"
        pattern="^\d{3,4}$"
        required
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default memo(CardSecurityCode);
