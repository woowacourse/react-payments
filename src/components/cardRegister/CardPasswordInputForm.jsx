import React from "react";
import { useEffect, useRef } from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { InputContainer, InputTitle } from "components/common/styled";
import Dot from "components/common/Dot";
import { RULE_INPUT } from "constants/constants";

export const CardPasswordInputForm = ({
  password,
  handlePasswordInput,
  handleCardPasswordCheck,
}) => {
  const passwordInputRefs = useRef([]);

  useEffect(() => {
    const isCompletePassword = Object.values(password).every((number, i) => {
      if (number) {
        passwordInputRefs.current[i + 1]?.focus();
        return true;
      }
      return false;
    });

    handleCardPasswordCheck(isCompletePassword);
  }, [password]);

  const handlePasswordChange = (e, name) => {
    if (isNaN(e.nativeEvent.data)) {
      return;
    }

    handlePasswordInput((prev) => ({ ...prev, [name]: e.nativeEvent.data }));
  };

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBox
        width="50%"
        backgroundColor="transparent"
        justifyContent={"space-between"}
      >
        <InputBasic
          value={password?.firstNumber}
          onChange={(e) => handlePasswordChange(e, "firstNumber")}
          inputRef={(elem) => (passwordInputRefs.current[0] = elem)}
          type="password"
          width="20%"
          pattern={RULE_INPUT.PASSWORD_RULE}
          maxLength="1"
        />
        <InputBasic
          value={password?.secondNumber}
          onChange={(e) => handlePasswordChange(e, "secondNumber")}
          inputRef={(elem) => (passwordInputRefs.current[1] = elem)}
          type="password"
          width="20%"
          pattern={RULE_INPUT.PASSWORD_RULE}
          maxLength="1"
        />
        <Dot />
        <Dot />
      </InputBox>
    </InputContainer>
  );
};
