import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_PIN } from '../../constants/conditions';

interface CardPINInputProps {
  isPINValid: { isValid: boolean; errorMessage: string };
  onChangePIN: (value: string) => void;
}

export default function CardPINInput({ isPINValid, onChangePIN }: CardPINInputProps) {
  const handleChangePIN = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(CARD_PIN.INVALID_CHARS_REGEX, '');
    if (e.target.value.length > CARD_PIN.MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, CARD_PIN.MAX_LENGTH);
      return;
    }

    onChangePIN(e.target.value);
  };

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" />
      <InputField label="비밀번호 앞 2자리" errorMessage={isPINValid.errorMessage}>
        <Input
          type="password"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={CARD_PIN.MAX_LENGTH}
          onChange={handleChangePIN}
          isValid={isPINValid.isValid}
          autoFocus
        />
      </InputField>
    </div>
  );
}
