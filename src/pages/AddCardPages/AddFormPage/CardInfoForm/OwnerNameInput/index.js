import { useState, forwardRef } from 'react';
import { Input, Label, Text } from '../../../../../components';
import { handleOwnerNameInputChange } from './handler';
import { MAX_OWNER_NAME_LENGTH } from '../../../../../constants';

export const OwnerNameInput = forwardRef((_, ref) => {
  const [ownerName, setOwnerName] = useState('');
  const [charLength, setCharLength] = useState(0);
  return (
    <>
      <div className="OwnerNameInput__Header">
        <Label>카드 소유자 이름(선택)</Label>
        <Text
          fontSize="0.75rem"
          fontWeight="600"
          letterSpacing="0.14em"
          textAlign="end"
          color="#525252"
          width="2rem"
        >
          {charLength}/{MAX_OWNER_NAME_LENGTH}
        </Text>
      </div>
      <Input
        className="OwnerNameInput__Field"
        container="CardInfoForm__Input__Filler--filled OwnerNameInput__Filler"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        name="ownerNameInput"
        maxLength={MAX_OWNER_NAME_LENGTH}
        ref={ref}
        value={ownerName}
        onChange={(e) => handleOwnerNameInputChange({ e, setCharLength, setOwnerName })}
      />
    </>
  );
});

OwnerNameInput.displayName = 'OwnerNameInput';
