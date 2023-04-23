import React, { useState, useContext } from "react";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import { MMYY_REGEXP, ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { inputValuesContext } from "src/InputValueContext";
import { Styled } from "./ExpireDate.styles";

function ExpireDate() {
  const [cardInput, setCardInput] = useContext(inputValuesContext);

  const [expireError, setExpireError] = useState(false);

  const expireDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value;
    const [curMM, _, curYY] = new Date().toLocaleDateString("en-US").split("/");
    const [MM, YY] = value.split("/");
    const date = value.replace("/", "");

    if (!ONLY_NUMBER_REGEXP.test(date)) return;
    if (!setCardInput) return;

    const dateValitation =
      value.length > 0 &&
      (!MMYY_REGEXP.test(date) ||
        curYY.slice(2) > YY ||
        (curYY.slice(2) === YY && curMM > MM));

    try {
      if (dateValitation) {
        throw new Error();
      }

      setExpireError(false);
    } catch {
      setExpireError(true);
    } finally {
      if (dateValitation && value.length === 5) {
        setCardInput((prev) => ({ ...prev, expireDate: "" }));
        return;
      }
      const expire = date.match(/.{1,2}/g) ?? [];

      setCardInput((prev) => ({ ...prev, expireDate: expire.join("/") }));
    }
  };

  return (
    <Styled.ExpireDateContainer>
      <FormLabel>{"만료일"}</FormLabel>
      <Input
        value={cardInput.expireDate}
        onChange={expireDateChange}
        maxLength={5}
        customInputStyle={Styled.ExpireDateInput}
        placeholder="MM / YY"
      />
      {expireError && <ErrorSpan>{"유효한 만료일이 아닙니다."}</ErrorSpan>}
    </Styled.ExpireDateContainer>
  );
}
export default ExpireDate;
