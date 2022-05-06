import React from "react";
import { useRef } from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { InputContainer, InputTitle } from "components/common/styled";
import Dot from "components/common/Dot";
import { RULE_INPUT } from "constants/constants";

export const CardPasswordInputForm = ({ handleCardPasswordCheck }) => {
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

    handleCardPasswordCheck(isCompletePassword);
  };

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBox
        width="50%"
        backgroundColor="transparent"
        justifyContent={"space-between"}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <InputBasic
            key={i}
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
