import React, { useCallback, useContext, useState } from "react";
import CardInfoContext from "context/CardInfoContext";

import { CARD_INFO_RULES } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";
import WordCounter from "components/UIComponents/WordCounter/WordCounter";

export default function CardHolderNameInput() {
  const [isInvalid, setInvalid] = useState(false);

  const { state, setState } = useContext(CardInfoContext);

  const { holderName } = state;

  const handleInputChange = (e) => {
    setInvalid(false);

    setState({ ...state, holderName: e.target.value.toUpperCase() });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  const isComplete = holderName !== "";

  const inputStyles = {
    width: "full",
    textAlign: "left",
  };

  return (
    <InputField
      labelText={"카드 소유자 이름 (선택)"}
      wrapperWidth={"full"}
      horizontalAlign={"flex-start"}
      isComplete={isComplete}
      isInvalid={isInvalid}
      OptionalComponent={
        <WordCounter
          currLength={holderName.length}
          maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
          state={isInvalid ? "error" : isComplete ? "complete" : "default"}
        />
      }
    >
      <Input
        type={"text"}
        value={holderName}
        placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
        name={"holderName"}
        maxLength={"30"}
        isComplete={isComplete}
        pattern={"^[a-zA-Z]+$"}
        onChange={handleInputChange}
        onInvalid={triggerInvalid}
        data-testid={"holder-name"}
        {...inputStyles}
      />
    </InputField>
  );
}
