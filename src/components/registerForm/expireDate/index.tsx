import React, { useState, useContext } from "react";
import Input from "src/components/@common/Input";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import { EACH_SECOND_CHANCE, ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { Styled } from "./ExpireDate.styles";
import { NUMBERS } from "src/utils/constant";
import { MMYYValidation } from "src/utils/validation";

function ExpireDate() {
  const [cardInput, setCardInput] = useContext(cardInfoContext);

  const [expireError, setExpireError] = useState(false);

  const expireDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value;
    const [MM, YY] = value.split("/");
    const date = value.replace("/", "");

    if (!ONLY_NUMBER_REGEXP.test(date)) return;
    if (!setCardInput) return;

    const dateValitation = MMYYValidation(date, [MM, YY]);

    try {
      if (dateValitation) {
        throw new Error("유효한 만료일이 아닙니다.");
      }

      setExpireError(false);
    } catch {
      setExpireError(true);
    } finally {
      if (dateValitation && value.length === NUMBERS.MAX_EXPIREDATE) {
        setCardInput((prev) => ({ ...prev, expireDate: "" }));
        return;
      }
      const expire = date.match(EACH_SECOND_CHANCE) ?? [];

      setCardInput((prev) => ({ ...prev, expireDate: expire.join("/") }));
    }
  };

  return (
    <Styled.ExpireDateContainer>
      <FormLabel>{"만료일"}</FormLabel>
      <Input
        value={cardInput.expireDate}
        onChange={expireDateChange}
        maxLength={NUMBERS.MAX_EXPIREDATE}
        customInputStyle={Styled.ExpireDateInput}
        placeholder="MM / YY"
      />
      {expireError && <ErrorSpan>{"유효한 만료일이 아닙니다."}</ErrorSpan>}
    </Styled.ExpireDateContainer>
  );
}
export default ExpireDate;
