import React, { useState } from "react";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import styled, { css } from "styled-components";

function SecurityCode() {
  const [code, setCode] = useState("");

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    setCode(value);
  };

  return (
    <SecurityCodeContainer>
      <FormLabel>{"보안 코드(CVC/CVV)"}</FormLabel>
      <Input
        value={code}
        onChange={codeChange}
        maxLength={3}
        type="password"
        customInputStyle={SecurityInput}
      />
    </SecurityCodeContainer>
  );
}

export default SecurityCode;

const SecurityCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const SecurityInput = css`
  width: 84px;
  letter-spacing: 7px;
  text-align: center;
  font-size: 28px;
`;
