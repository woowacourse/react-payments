import { ChangeEvent, FocusEvent } from 'react';
import { CardInputValidation } from '../../../types';
import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

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
        name="securityCode"
        value={value}
        minLength={3}
        maxLength={4}
        isError={isError}
        autoComplete="off"
        onChange={onInputChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardSecurityCode;
