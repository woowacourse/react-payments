import { useState } from 'react';
import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_OWNER } from '../../constants/Condition';
import { ERROR_MESSAGE } from '../../constants/Message';

interface CardOwnerInputProps {
  setOwner: React.Dispatch<React.SetStateAction<string>>;
}

function CardOwnerInput({ setOwner }: CardOwnerInputProps) {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateOwner = (value: string) => {
    const regExp = CARD_OWNER.VALID_REGEX;

    if (!regExp.test(value)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_CARD_OWNER_CHARACTER);
      return false;
    }

    if (value.length > CARD_OWNER.MAX_LENGTH) {
      setErrorMessage(ERROR_MESSAGE.INVALID_CARD_OWNER_LENGTH);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const onOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValid = validateOwner(e.target.value);

    setIsValid(newIsValid);
    setOwner(newIsValid ? e.target.value.toUpperCase() : '');
  };

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <InputField label="소유자 이름" length={CARD_OWNER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          maxLength={CARD_OWNER.MAX_LENGTH}
          placeholder="STEVEN KING"
          onChange={onOwnerChange}
          isValid={isValid}
        />
      </InputField>
    </div>
  );
}

export default CardOwnerInput;
