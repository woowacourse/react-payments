import Input from "components/common/Input";
import InputContainer from "components/common/InputContainer";
import { MAX_USER_NAME_LENGTH } from "constant";
import React from "react";
import type { InputChangeFunction } from "types";

interface CardUserNameProps {
  userName: string;
  onChange: InputChangeFunction;
  onBlur: () => void;
  inputs: HTMLInputElement[];
}

export default function CardUserName({ userName, onChange, onBlur, inputs }: CardUserNameProps) {
  return (
    <InputContainer
      title="카드 소유자 이름(선택)"
      rightContent={<LengthIndicator length={userName.length} maxLength={MAX_USER_NAME_LENGTH} />}
    >
      <Input
        value={userName}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={onChange}
        maxLength={MAX_USER_NAME_LENGTH}
        style={{ padding: "0 10px" }}
        onBlur={onBlur}
        name="userName"
        align="left"
        inputs={inputs}
      />
    </InputContainer>
  );
}

function LengthIndicator({ length, maxLength }: { length: number; maxLength: number }) {
  return (
    <span className="card-user-name-length">
      {length}/{maxLength}
    </span>
  );
}
