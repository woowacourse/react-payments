import React from 'react';

import { MAX_LENGTH } from '../../constants/card';
import { CARD_INFO_TYPES } from '../../reducer/types';

import { InputContainer, InputTitle, InputBasic } from '../common/styled';

export const CardOwnerInputForm = ({ ownerName, onOwnerNameInput }) => {
  const handleOwnerNameChange = (e) => {
    if (e.target.value.length > MAX_LENGTH.OWNER_NAME) {
      return;
    }

    onOwnerNameInput({
      type: CARD_INFO_TYPES.SET_OWNER_NAME,
      payload: { ownerName: e.target.value },
    });
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
