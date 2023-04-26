import { ChangeEvent, FocusEvent, memo } from 'react';
import { CardFormValidation } from '../../../types';
import { SECURITY_CODE_MAX_LENGTH, SECURITY_CODE_MIN_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/common/useError';

interface CardSecurityCodeProps {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputValidation: (key: keyof CardFormValidation, value: string | string[]) => boolean;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardSecurityCode({
  onInputChange,
  value,
  updateCardInputValidation,
  moveFocus,
}: CardSecurityCodeProps) {
  const { isError, handleError, removeError } = useError();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputChange(event);
    moveFocus(event.target.tabIndex, event.currentTarget.value, event.currentTarget.maxLength);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isValid = updateCardInputValidation(
      event.target.name as keyof CardFormValidation,
      event.target.value
    );
    handleError(isValid);
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
        value={value}
        minLength={SECURITY_CODE_MIN_LENGTH}
        maxLength={SECURITY_CODE_MAX_LENGTH}
        autoComplete="cc-csc"
        inputMode="numeric"
        tabIndex={5}
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default memo(CardSecurityCode);
