import React, { useState } from "react";
import FormLabel from "./common/FormLabel";
import Input from "./common/Input";
import ErrorSpan from "./common/ErrorSpan";
import {
  CONTINUOUS_EMPTY_REGEXP,
  ONLY_ENG_AND_EMPTY_REGEXP,
} from "src/utils/regexp";
import styled, { css } from "styled-components";

function OwnerNameInput() {
  const [ownerName, setOwnerName] = useState("");
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const ownerNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;

    try {
      if (!ONLY_ENG_AND_EMPTY_REGEXP.test(value)) {
        throw new Error("카드 소유자 이름은 영어와 공백만 입력 가능합니다.");
      }

      if (CONTINUOUS_EMPTY_REGEXP.test(value)) {
        throw new Error(
          "카드 소유자 이름은 공백을 연속해서 작성할 수 없습니다.",
        );
      }

      if (value.length < 3 || value.length > 30) {
        throw new Error("카드 소유자 이름은 3글자 이상 30글자 이하입니다.");
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
        setOwnerName(value.toUpperCase());
      }
    }
  };

  return (
    <OwnerNameInputContainer>
      <LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${ownerName.length} / 30`}</span>
      </LabelContainer>
      <Input
        value={ownerName}
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
  width: 318px;
  justify-content: space-between;
  align-items: center;
`;

const OwnerNameStyle = css`
  width: 318px;

  font-size: 18px;
  font-weight: 500;
`;
