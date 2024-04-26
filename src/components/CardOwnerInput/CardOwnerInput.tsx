import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_OWNER } from '../../constants/conditions';

interface CardOwnerInputProps {
  isOwnerValid: { isValid: boolean; errorMessage: string };
  onChangeOwner: (value: string) => void;
}

export default function CardOwnerInput({ isOwnerValid, onChangeOwner }: CardOwnerInputProps) {
  const handleOwnerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(CARD_OWNER.INVALID_CHARS_REGEX, '').toUpperCase();
    onChangeOwner(event.target.value);
  };

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <InputField label="소유자 이름" length={CARD_OWNER.INPUT_FIELD_COUNT} errorMessage={isOwnerValid.errorMessage}>
        <Input
          type="text"
          maxLength={CARD_OWNER.MAX_LENGTH}
          placeholder="SEONGJIN HONG"
          onChange={handleOwnerInput}
          isValid={isOwnerValid.isValid}
          autoFocus
        />
      </InputField>
    </div>
  );
}
