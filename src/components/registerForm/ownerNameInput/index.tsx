import React, { useState, useContext } from "react";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import {
  CONTINUOUS_EMPTY_REGEXP,
  ONLY_ENG_AND_EMPTY_REGEXP,
} from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { Styled } from "./OwnerNameInput.styles";
import { NUMBERS } from "src/utils/constant";
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
        if (CONTINUOUS_EMPTY_REGEXP.test(value)) {
          throw new Error(
            "카드 소유자 이름은 공백을 연속해서 작성할 수 없습니다.",
          );
        }

        if (value.length < MIN_OWNER_NAME || value.length > MAX_OWNER_NAME) {
          throw new Error(
            `카드 소유자 이름은 ${MIN_OWNER_NAME}글자 이상 ${MAX_OWNER_NAME}글자 이하입니다.`,
          );
        }
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
        <span>{`${cardInput.ownerName.length} / ${MAX_OWNER_NAME}}`}</span>
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
