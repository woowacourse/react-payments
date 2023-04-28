import { Input } from 'components/common';
import { ChangeEvent, ChangeEventHandler } from 'react';
import { validateInput } from 'util/Validation';
import { Styled as S } from './SecurityCodeInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';

export interface SecurityInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function SecurityCodeInput({ value, onChange }: SecurityInputProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (validateInput(value)) return;

    onChange && onChange(e);
  };

  return (
    <>
      <FormLabel>보안 코드(CVC/CVV)</FormLabel>
      <S.SecurityCodeContainer>
        <S.SecurityCodeInputContainer>
          <Input
            value={value}
            inputMode="numeric"
            type="password"
            maxLength={3}
            onChange={(e) => handleChange(e, onChange)}
            required
          />
        </S.SecurityCodeInputContainer>
        <S.SecurityCodeButton>?</S.SecurityCodeButton>
        <S.SecurityCodeNotification>
          카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요
        </S.SecurityCodeNotification>
      </S.SecurityCodeContainer>
    </>
  );
}
