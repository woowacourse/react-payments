import React, { useState, useContext } from "react";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import { ONLY_ENG_AND_EMPTY_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { Styled } from "./OwnerNameInput.styles";
import { NUMBERS } from "src/utils/constant";
import {
  checkOwnerNameLength,
  continuousEmptyValidation,
} from "src/utils/validation";

function OwnerNameInput() {
  const { MIN_OWNER_NAME, MAX_OWNER_NAME } = NUMBERS;
  const [cardInput, setCardInput] = useContext(cardInfoContext);

  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const ownerNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;

    if (!ONLY_ENG_AND_EMPTY_REGEXP.test(value)) return;
    try {
      if (value.length > 0) {
        continuousEmptyValidation(value);
        checkOwnerNameLength(value, MIN_OWNER_NAME, MAX_OWNER_NAME);
      }

      setError({
        isError: false,
        message: "",
      });
    } catch (error) {
      if (!(error instanceof Error)) return;

      setError({
        isError: true,
        message: error.message,
      });
    } finally {
      if (value.length <= MAX_OWNER_NAME) {
        if (!setCardInput) return;
        setCardInput((prev) => ({
          ...prev,
          ownerName: value.toUpperCase(),
        }));
      }
    }
  };

  return (
    <Styled.OwnerNameInputContainer>
      <Styled.LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${cardInput.ownerName.length} / ${MAX_OWNER_NAME}`}</span>
      </Styled.LabelContainer>
      <Input
        value={cardInput.ownerName}
        onChange={ownerNameChange}
        customInputStyle={Styled.OwnerNameStyle}
      />
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </Styled.OwnerNameInputContainer>
  );
}

export default OwnerNameInput;
