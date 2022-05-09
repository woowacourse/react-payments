import React, { useRef, useState } from "react";

import { RULE_INPUT } from "constants/constants";
import {
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
  Dot,
} from "components/common";

export const CardPasswordInput = ({ handleCardPasswordCheck }) => {
  const [validate, setValidate] = useState(false);
  const passwordInputRefs = useRef([]);

  const handlePasswordChange = (e) => {
    if (isNaN(e.nativeEvent.data)) {
      return;
    }

    const isCompletePassword = passwordInputRefs.current.every((number, i) => {
      if (number.value) {
        passwordInputRefs.current[i + 1]?.focus();
        return true;
      }
      return false;
    });

    setValidate(isCompletePassword);
    handleCardPasswordCheck(isCompletePassword);
  };

  return (
    <InputContainer>
      <InputTitle isValid={validate}>카드 비밀번호</InputTitle>
      <InputBox
        width="50%"
        backgroundColor="transparent"
        justifyContent={"space-between"}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <InputBasic
            key={i}
            id={`input_password-${i}`}
            onChange={(e) => handlePasswordChange(e)}
            inputRef={(elem) => (passwordInputRefs.current[i] = elem)}
            type="password"
            width="20%"
            pattern={RULE_INPUT.PASSWORD_RULE}
            maxLength="1"
          />
        ))}
        <Dot />
        <Dot />
      </InputBox>
    </InputContainer>
  );
};
