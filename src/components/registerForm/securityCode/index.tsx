import React, { useState, useContext } from "react";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { inputValuesContext } from "src/InputValueContext";
import { Styled } from "./SecurityCode.styles";

function SecurityCode() {
  const [cardInput, setCardInput] = useContext(inputValuesContext);
  const [error, setError] = useState(false);

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      if (value.length > 0 && value.length !== 3) throw new Error();
      setError(false);
    } catch {
      setError(true);
    } finally {
      if (!setCardInput) return;
      setCardInput((prev) => ({ ...prev, securityCode: value }));
    }
  };

  return (
    <Styled.SecurityCodeContainer>
      <FormLabel>{"보안 코드(CVC/CVV)"}</FormLabel>
      <Input
        value={cardInput.securityCode}
        onChange={codeChange}
        maxLength={3}
        type="password"
        customInputStyle={Styled.SecurityInput}
      />
      {error && <ErrorSpan>보안 코드는 3자리 입니다.</ErrorSpan>}
    </Styled.SecurityCodeContainer>
  );
}

export default SecurityCode;
