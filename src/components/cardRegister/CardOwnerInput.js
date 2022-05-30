import { useState, useEffect } from "react";

import { MAX_LENGTH } from "../../constants/card";
import useCardInfoContext from "../../hooks/useCardInfoContext";
import { setOwnerNameComplete } from "../../providers/CardInfoCompleteProvider";
import { setCardOwnerName } from "../../providers/CardInfoProvider";

import { InputContainer, InputTitle, InputBasic } from "../common/styled";

export const CardOwnerInput = () => {
  const { infoDispatch, completeDispatch } = useCardInfoContext();

  const [ownerName, setOwnerName] = useState("");

  const handleOwnerNameChange = (e) => {
    if (e.target.value.length > MAX_LENGTH.OWNER_NAME) {
      return;
    }

    setOwnerName(e.target.value);
  };

  const updateTypedOwnerName = (e) => {
    infoDispatch(setCardOwnerName(e.target.value));
  };

  useEffect(() => {
    completeDispatch(setOwnerNameComplete(!!ownerName));
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
