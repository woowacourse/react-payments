import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import type { InputType } from '../../../hooks/useInput';
import { CARD_OWNER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardOwnerInputProps {
  owner: InputType;
}

const CardOwnerInput = ({ owner }: CardOwnerInputProps) => {
  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    owner.handleValue(e.target.value.toUpperCase());
  };

  const errorMessage = owner.isClicked && !owner.isValid ? ERROR_MESSAGE.INVALID_CARD_OWNER : '';

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <InputField label="소유자 이름" inputCount={CARD_OWNER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          maxLength={CARD_OWNER.MAX_LENGTH}
          placeholder="STEVEN KING"
          value={owner.value}
          onChange={handleOwnerChange}
          isValid={owner.isClicked ? owner.isValid : true}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardOwnerInput;
