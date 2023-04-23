import React, { useState, useContext } from "react";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { Styled } from "./SecurityCode.styles";
import { NUMBERS } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";

function SecurityCode() {
  const [cardInput, setCardInput] = useContext(cardInfoContext);
  const [error, setError] = useState(false);

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      lengthMatchValidation(value, NUMBERS.MAX_SECURITY);
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
        maxLength={NUMBERS.MAX_SECURITY}
        type="password"
        customInputStyle={Styled.SecurityInput}
      />
      {error && <ErrorSpan>보안 코드는 3자리 입니다.</ErrorSpan>}
    </Styled.SecurityCodeContainer>
  );
}

export default SecurityCode;
