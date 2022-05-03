import React from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { MAX_USER_NAME_LENGTH } from "../../../constants";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkCardUserName } from "../../../validations/cardInfoForm";

interface CardUserNameProps {
  cardUserName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}
export default function CardUserName({ cardUserName, onChange, onBlur }: CardUserNameProps) {
  const { inputValidation, validateInput } = useInputValidation(false);

  const handleChangeCardUserName = e => {
    const targetCardUserName = e.target.value;

    validateInput(targetCardUserName, checkCardUserName);
    onChange(e);
  };

  return (
    <InputContainer inputTitle="카드 소유자 이름(선택)" validation={inputValidation}>
      <Input
        value={cardUserName}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleChangeCardUserName}
        maxLength={MAX_USER_NAME_LENGTH}
        style={{ padding: "0 10px" }}
        onBlur={onBlur}
        name="userName"
        align="left"
        pattern="[a-zA-Z]{1,30}"
      />
      <span className="card-user-name-length">
        {cardUserName.length}/{MAX_USER_NAME_LENGTH}
      </span>
    </InputContainer>
  );
}
