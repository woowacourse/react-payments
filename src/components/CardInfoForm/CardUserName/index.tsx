import React from "react";

import { MAX_USER_NAME_LENGTH } from "../../../constants";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";

interface CardUserNameProps {
  cardUserName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  isValid: boolean;
}
export default function CardUserName({
  cardUserName,
  onChange,
  onBlur,
  isValid,
}: CardUserNameProps) {
  return (
    <InputContainer inputTitle="카드 소유자 이름(선택)" isValid={isValid}>
      <Input
        value={cardUserName}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={onChange}
        maxLength={MAX_USER_NAME_LENGTH}
        style={{ padding: "0 10px" }}
        onBlur={onBlur}
        name="userName"
        align="left"
      />
      <span className="card-user-name-length">
        {cardUserName.length}/{MAX_USER_NAME_LENGTH}
      </span>
    </InputContainer>
  );
}
