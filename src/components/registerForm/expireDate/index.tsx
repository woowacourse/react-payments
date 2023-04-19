import React, { useState } from "react";
import Input from "src/components/@common/Input";
import styled, { css } from "styled-components";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import { ONLY_MONTH_REGEXP } from "src/utils/regexp";

function isValidMonth(month: string) {
  // 입력값이 문자열이 아니거나, 1월 ~ 12월이 아닐 경우 false를 반환
  if (!ONLY_MONTH_REGEXP.test(month)) {
    return false;
  }
  // 입력값이 1월 ~ 12월일 경우 true를 반환
  return true;
}

function ExpireDate() {
  const [expireDate, setExpireDate] = useState("");
  const [expireError, setExpireError] = useState(false);

  const expireDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;
    const [curMM, _, curYY] = new Date().toLocaleDateString("en-US").split("/");
    const [MM, YY] = value.split("/");

    if (
      value.length === 5 &&
      (!isValidMonth(MM) || curYY > YY || (curYY === YY && curMM > MM))
    ) {
      setExpireError(true);
    } else {
      setExpireError(false);
    }

    const expire = value.replace("/", "").match(/.{1,2}/g) ?? [];
    setExpireDate(expire.join("/"));
  };

  return (
    <ExpireDateContainer>
      <FormLabel>{"만료일"}</FormLabel>
      <Input
        value={expireDate}
        onChange={expireDateChange}
        maxLength={5}
        customInputStyle={ExpireDateInput}
        placeholder="MM / YY"
      />
      {expireError && <ErrorSpan>{"유효한 만료일이 아닙니다."}</ErrorSpan>}
    </ExpireDateContainer>
  );
}
export default ExpireDate;

const ExpireDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const ExpireDateInput = css`
  width: 137px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;
