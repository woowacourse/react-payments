import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { MAX_USER_NAME_LENGTH } from "../../../constants";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkCardUserName } from "../../../validations/cardInfoForm";
import { Context } from "../../../contexts/CardContext";

interface CardUserNameProps {
  validateFormValidation: any;
}
export default function CardUserName({ validateFormValidation }: CardUserNameProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [cardInfo, dispatch] = useContext(Context);
  const { userName } = cardInfo;

  const handleChangeCardUserName = e => {
    const targetCardUserName = e.target.value;

    validateInput(targetCardUserName, checkCardUserName);
    validateFormValidation("userName", isValidInput(targetCardUserName, checkCardUserName));

    dispatch({ type: "UPDATE_USER_NAME", payload: { userName: targetCardUserName } });
  };

  const handleBlurCardUserName = e => {
    const targetCardUserName = e.target.value;

    dispatch({ type: "TRIM_USER_NAME", payload: { userName: targetCardUserName } });
  };

  return (
    <InputContainer inputTitle="카드 소유자 이름(선택)" validation={inputValidation}>
      <Input
        value={userName}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleChangeCardUserName}
        maxLength={MAX_USER_NAME_LENGTH}
        style={{ padding: "0 10px" }}
        onBlur={handleBlurCardUserName}
        name="userName"
        align="left"
        pattern="[ a-zA-Z]{1,30}"
      />
      <span className="card-user-name-length">
        {userName.length}/{MAX_USER_NAME_LENGTH}
      </span>
    </InputContainer>
  );
}
