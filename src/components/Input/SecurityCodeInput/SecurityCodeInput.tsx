import { Input } from 'components/common';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { validateInput } from 'util/Validation';
import { Styled as S } from './SecurityCodeInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { validateSecurityCode } from 'util/ValidateSecurityCode';
import { ErrorCaption } from 'components/Form/AddCardForm';

export interface SecurityInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateInput(value)) {
      setIsError(true);
      return;
    }

    validateSecurityCode(value) ? setIsError(false) : setIsError(true);

    onChange(e);
  };

  return (
    <>
      <FormLabel>보안 코드(CVC/CVV)</FormLabel>
      <S.SecurityCodeContainer>
        <S.SecurityCodeInputContainer className={isError ? 'error' : ''}>
          <Input
            value={value}
            inputMode="numeric"
            type="password"
            maxLength={3}
            onChange={handleChange}
            required
          />
        </S.SecurityCodeInputContainer>
        <S.SecurityCodeButton>?</S.SecurityCodeButton>
        <S.SecurityCodeNotification>
          카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요
        </S.SecurityCodeNotification>
      </S.SecurityCodeContainer>
      <ErrorCaption>{isError && '보안 코드 3자리 숫자를 입력해주세요.'}</ErrorCaption>
    </>
  );
}
