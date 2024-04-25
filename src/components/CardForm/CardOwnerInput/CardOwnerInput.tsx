import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useInput from '../../../hooks/useInput';

import { CARD_OWNER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardOwnerInputProps {
  owner: string;
  isValid: boolean;
  handleOwner: (owner: string) => void;
}

function CardOwnerInput({ owner, isValid, handleOwner }: CardOwnerInputProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { value: ownerInput, onChange: onOwnerInputChange } = useInput(owner);

  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isClicked) setIsClicked(true);

    onOwnerInputChange(e);
    handleOwner(e.target.value.toUpperCase());
  };

  const errorMessage = isValid ? '' : ERROR_MESSAGE.INVALID_CARD_OWNER;

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <InputField
        label="소유자 이름"
        inputCount={CARD_OWNER.INPUT_FIELD_COUNT}
        errorMessage={isClicked ? errorMessage : ''}
      >
        <Input
          type="text"
          maxLength={CARD_OWNER.MAX_LENGTH}
          placeholder="STEVEN KING"
          value={ownerInput}
          onChange={handleOwnerChange}
          isValid={isClicked ? isValid : true}
          autoFocus
        />
      </InputField>
    </div>
  );
}

export default CardOwnerInput;
