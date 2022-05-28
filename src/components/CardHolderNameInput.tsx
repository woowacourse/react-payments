import React from "react";

import { CARD_INFO_RULES } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";
import WordCounter from "components/UIComponents/WordCounter/WordCounter";

import useCardInput from "hooks/useCardInput";

export default function CardHolderNameInput() {
  const {
    targetState: holderName,
    setTargetState: setHolderName,
    isInvalid,
    setInvalid,
    triggerInvalid,
  } = useCardInput("holderName");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInvalid(false);
    setHolderName(value.toUpperCase());
  };

  const isComplete = holderName !== "";

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
        maxLength={30}
        isComplete={isComplete}
        pattern={"^[a-zA-Z]+$"}
        onChange={handleInputChange}
        onInvalid={triggerInvalid}
        data-testid={"holder-name"}
        width={"full"}
      />
    </InputField>
  );
}
