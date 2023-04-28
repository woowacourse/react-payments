import { ChangeEvent, memo, useState } from 'react';
import { OWNER_NAME_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { formatEnglishCapitalization, formatSentence } from '../../../utils/formatter';

interface CardOwnerNameProps {
  updateInputValue: (key: string, value: any) => void;
}

function CardOwnerName({ updateInputValue }: CardOwnerNameProps) {
  const [value, setValue] = useState('');

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(formatEnglishCapitalization(target.value));
    updateInputValue(target.name, formatSentence(target.value));
  };

  return (
    <InputContainer
      characterCounter={{
        currentCount: value.length,
        maxCount: OWNER_NAME_MAX_LENGTH,
      }}
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
