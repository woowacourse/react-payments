import { useState, useEffect } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isValidForm, isValidRange } from '../../../utils/validation';
import { CARD_OWNER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardOwnerInputProps {
  owner: string;
  handleOwner: (owner: string) => void;
}

function CardOwnerInput({ owner, handleOwner }: CardOwnerInputProps) {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    isValid ? setErrorMessage('') : setErrorMessage(ERROR_MESSAGE.INVALID_CARD_OWNER);
  }, [isValid]);

  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValid =
      isValidForm(e.target.value, CARD_OWNER.VALID_REGEX) &&
      isValidRange(e.target.value.length, 1, CARD_OWNER.MAX_LENGTH);

    setIsValid(newIsValid);
    handleOwner(newIsValid ? e.target.value.toUpperCase() : '');
  };

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <InputField label="소유자 이름" inputCount={CARD_OWNER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          maxLength={CARD_OWNER.MAX_LENGTH}
          placeholder="STEVEN KING"
          value={owner}
          onChange={handleOwnerChange}
          isValid={isValid}
        />
      </InputField>
    </div>
  );
}

export default CardOwnerInput;
