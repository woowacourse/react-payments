import { ChangeEvent } from 'react';
import { OWNER_NAME_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';

interface CardOwnerNameProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function CardOwnerName({ onInputChange, value = '' }: CardOwnerNameProps) {
  return (
    <InputContainer label="카드 소유자 이름" id="ownerName" characterCounter={[value.length, 20]}>
      <Input
        id="ownerName"
        name="ownerName"
        value={value}
        placeholder="카드에 표시된 이름과 동일하게 입력해주세요"
        maxLength={OWNER_NAME_MAX_LENGTH}
        autoComplete="cc-name"
        onChange={onInputChange}
      />
    </InputContainer>
  );
}

export default CardOwnerName;
