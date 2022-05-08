import { useState, useContext, useEffect } from 'react';

import { MAX_LENGTH } from '../../constants/card';
import { CardInfoContext } from '../../providers/CardInfoProvider';

import { InputContainer, InputTitle, InputBasic } from '../common/styled';

export const CardOwnerInput = () => {
  const context = useContext(CardInfoContext);

  const [ownerName, setOwnerName] = useState('');

  const handleOwnerNameChange = (e) => {
    if (e.target.value.length > MAX_LENGTH.OWNER_NAME) {
      return;
    }

    setOwnerName(e.target.value);
  };

  const updateTypedOwnerName = (e) => {
    context.setCardOwnerName(e.target.value);
  };

  useEffect(() => {
    context.setInputCompleted('ownerName', !!ownerName);
  }, [ownerName]);

  return (
    <InputContainer>
      <InputTitle>
        <span>카드 소유자 이름(선택)</span>
        <span>{ownerName.length}/30</span>
      </InputTitle>
      <InputBasic
        value={ownerName}
        onChange={handleOwnerNameChange}
        onBlur={updateTypedOwnerName}
        type="text"
      />
    </InputContainer>
  );
};
