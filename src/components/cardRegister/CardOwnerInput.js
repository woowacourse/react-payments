import { useState } from 'react';

import { MAX_LENGTH } from '../../constants/card';

import { InputContainer, InputTitle, InputBasic } from '../common/styled';

export const CardOwnerInput = () => {
  const [ownerName, setOwnerName] = useState('');

  const handleOwnerNameChange = (e) => {
    if (e.target.value.length > MAX_LENGTH.OWNER_NAME) {
      return;
    }

    setOwnerName(e.target.value);
  };

  return (
    <InputContainer>
      <InputTitle>
        <span>카드 소유자 이름(선택)</span>
        <span>{ownerName.length}/30</span>
      </InputTitle>
      <InputBasic
        value={ownerName}
        onChange={handleOwnerNameChange}
        type="text"
      />
    </InputContainer>
  );
};
