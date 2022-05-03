import React from "react";

import { InputBasic } from "../common/InputBasic";
import { InputContainer, InputTitle } from "../common/styled";

export const CardOwnerInputForm = ({ ownerName, handleOwnerNameInput }) => {
  const handleOwnerNameChange = (e) => {
    handleOwnerNameInput(e.target.value);
  };

  return (
    <InputContainer>
      <InputTitle htmlFor="input_owner_name">
        <span>카드 소유자 이름(선택)</span>
        <span>{ownerName.length}/30</span>
      </InputTitle>
      <InputBasic
        value={ownerName}
        onChange={handleOwnerNameChange}
        id="input_owner_name"
        type="text"
        maxLength="30"
      />
    </InputContainer>
  );
};
