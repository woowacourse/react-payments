import { ChangeEvent, memo } from 'react';
import { OWNER_NAME_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';

interface CardOwnerNameProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
  value?: string;
}

function CardOwnerName({ onInputChange, moveFocus, value = '' }: CardOwnerNameProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);
    moveFocus(event.target.tabIndex, event.currentTarget.value, event.currentTarget.maxLength);
  };

  return (
    <InputContainer
      characterCounter={{ currentCount: value.length, maxCount: OWNER_NAME_MAX_LENGTH }}
    >
      <Label htmlFor="ownerName">카드 소유자 이름</Label>
      <Input
        id="ownerName"
        name="ownerName"
        value={value}
        placeholder="카드에 표시된 이름과 동일하게 입력해주세요"
        maxLength={OWNER_NAME_MAX_LENGTH}
        autoComplete="cc-name"
        tabIndex={4}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default memo(CardOwnerName);
