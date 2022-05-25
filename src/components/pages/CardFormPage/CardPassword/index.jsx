import React, { useContext, useEffect } from "react";

import useInputHandler from "hooks/useInputHandler";
import { validatePassword } from "validator";
import { isCorrectPwd } from "../checkInputs";

import { CardInfoContext } from "components/context/CardInfoProvider";

import { InputContainer, Label, InputWrapper } from "components/common/styled";
import InactiveContainer from "components/common/InactiveContainer";
import ErrorMessage from "components/common/ErrorMessage";
import Input from "components/common/Input";
import { InputPasswordWrapper } from "./style";

function CardPassword() {
  const { pwd } = useContext(CardInfoContext);

  const { errorMessage, setErrorMessage, updateInputState } = useInputHandler(
    validatePassword,
    {
      type: "UPDATE_PWD",
      key: "pwd",
      prevData: pwd,
    }
  );

  const handleInputChange = ({ target }) => {
    updateInputState(target);
  };

  useEffect(() => {
    if (isCorrectPwd(pwd)) setErrorMessage("");
  }, [pwd]);

  return (
    <InputContainer>
      <Label>카드 비밀번호</Label>
      <InputPasswordWrapper>
        <InputWrapper>
          <Input
            type="password"
            maxLength={1}
            name="pwdNoA"
            onChange={handleInputChange}
            value={pwd.pwdNoA}
            data-testid="pwdNoA"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            maxLength={1}
            name="pwdNoB"
            onChange={handleInputChange}
            value={pwd.pwdNoB}
            required
            data-testid="pwdNoB"
          />
        </InputWrapper>
        <InactiveContainer />
        <InactiveContainer />
      </InputPasswordWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardPassword;
