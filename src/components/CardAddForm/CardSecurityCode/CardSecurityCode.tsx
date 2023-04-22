import { ChangeEvent } from 'react';
import { CardInputValidation } from '../../../types';
import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

interface CardSecurityCodeProps {
  handleValidationChange: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function CardSecurityCode({ handleValidationChange, onInputChange, value }: CardSecurityCodeProps) {
  const [isError, onErrorBlur] = useError({
    validator: validator.securityCode,
    handleValidationChange,
  });

  return (
    <InputContainer
      label="보안 코드 (CVC/CVV)"
      id="securityCode"
      supportingText={
        isError
          ? '카드에 표시된 CVC/CVV 번호와 동일하게 입력해주세요'
          : '카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요'
      }
      isError={isError}
      required
    >
      <Input
        type="password"
        id="securityCode"
        data-name="securityCode"
        value={value}
        minLength={3}
        maxLength={4}
        isError={isError}
        autoComplete="off"
        onChange={onInputChange}
        onBlur={onErrorBlur}
      />
    </InputContainer>
  );
}

export default CardSecurityCode;
