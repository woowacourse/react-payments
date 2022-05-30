import { useState, useEffect } from "react";

import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from "../common/styled";
import Dot from "../common/Dot";
import { AutoFocusInputContainer } from "../common/AutoFocusInputContainer";
import styled from "styled-components";
import useCardInfoContext from "../../hooks/useCardInfoContext";
import { setCardPassword } from "../../providers/CardInfoProvider";
import { setCardPasswordComplete } from "../../providers/CardInfoCompleteProvider";

export const CardPasswordInput = () => {
  const { cardInfo, infoDispatch, completeDispatch } = useCardInfoContext();

  const [password, setPassword] = useState(cardInfo.password);

  const handlePasswordChange = (e, name) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 1) {
      return;
    }

    setPassword((prev) => ({ ...prev, [name]: e.target.value }));
    infoDispatch(setCardPassword(name, e.target.value));
  };

  useEffect(() => {
    const isCompletePassword = Object.values(password).every(
      (number) => number
    );

    completeDispatch(setCardPasswordComplete(isCompletePassword));
  }, [password]);

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <Style.PasswordInputBox>
        <AutoFocusInputContainer maxValueLength={1}>
          <Style.PasswordInputBasic
            value={password.firstNumber || ""}
            onChange={(e) => handlePasswordChange(e, "firstNumber")}
            type="password"
          />
          <Style.PasswordInputBasic
            value={password.secondNumber || ""}
            onChange={(e) => handlePasswordChange(e, "secondNumber")}
            type="password"
          />
          <Dot />
          <Dot />
        </AutoFocusInputContainer>
      </Style.PasswordInputBox>
    </InputContainer>
  );
};

const Style = {
  PasswordInputBox: styled(InputBox)`
    width: 50%;
    background-color: transparent;
    justify-content: space-between;
  `,
  PasswordInputBasic: styled(InputBasic)`
    width: 20%;
  `,
};
