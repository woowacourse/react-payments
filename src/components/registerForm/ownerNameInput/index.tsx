import React from "react";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import { Styled as S } from "./OwnerNameInput.styles";
import { NUMBERS } from "src/utils/constant";
import {
  checkOwnerNameLength,
  continuousEmptyValidation,
} from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";

function OwnerNameInput() {
  const { MIN_OWNER_NAME, MAX_OWNER_NAME } = NUMBERS;

  const { value, onChange, error } = useCardInfoInput<string>({
    contextType: "ownerName",
    validation: (value) => {
      if (value.length > 0) {
        continuousEmptyValidation(value);
        checkOwnerNameLength(value, MIN_OWNER_NAME, MAX_OWNER_NAME);
      }
    },
  });

  return (
    <S.OwnerNameInputContainer>
      <S.LabelContainer>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
        <span>{`${value.length} / ${MAX_OWNER_NAME}`}</span>
      </S.LabelContainer>
      <Input
        value={value}
        onChange={onChange}
        customInputStyle={S.OwnerNameStyle}
        placeholder="영어와 띄어쓰기만 입력할 수 있습니다."
      />
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </S.OwnerNameInputContainer>
  );
}

export default OwnerNameInput;
