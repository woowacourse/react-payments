import React, { useState, useContext } from "react";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import {
  CONTINUOUS_EMPTY_REGEXP,
  ONLY_ENG_AND_EMPTY_REGEXP,
} from "src/utils/regexp";
import styled, { css } from "styled-components";
import { InputValuesContext } from "../Main";

function OwnerNameInput() {
  const [cardInput, setCardInput] = useContext(InputValuesContext);

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

        if (value.length < 3 || value.length > 30) {
          throw new Error("카드 소유자 이름은 3글자 이상 30글자 이하입니다.");
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
      if (value.length <= 30) {
        if (!setCardInput) return;
        setCardInput((prev) => ({
          ...prev,
          ownerName: value.toUpperCase(),
        }));
      }
    }
  };

  return (
    <OwnerNameInputContainer>
      <LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${cardInput.ownerName.length} / 30`}</span>
      </LabelContainer>
      <Input
        value={cardInput.ownerName}
        onChange={ownerNameChange}
        customInputStyle={OwnerNameStyle}
      />
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </OwnerNameInputContainer>
  );
}

export default OwnerNameInput;

const OwnerNameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const OwnerNameStyle = css`
  width: 100%;

  font-size: 18px;
  font-weight: 500;

  letter-spacing: 1px;
`;
