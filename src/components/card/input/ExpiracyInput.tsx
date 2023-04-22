import React from "react";
import styled from "styled-components";
import { UseInputProps } from "../../../hooks/useInput";
import Input from "../../common/Input";
import ToolTip from "../../common/ToolTip";

interface ExpiracyInputProps {
  year: UseInputProps;
  month: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
`;

const InputWrapper = styled.div`
  width: 40px;
`;

const Slash = styled.span`
  position: relative;
  left: 3px;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
`;
export default function ExpiracyInput({ year, month }: ExpiracyInputProps) {
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          id="expiracy"
          isNumber={true}
          required
          placeholder="MM"
          textAlign="center"
          {...month}
        />
      </InputWrapper>
      <Slash>/</Slash>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          isNumber={true}
          required
          placeholder="YY"
          textAlign="center"
          {...year}
        />
      </InputWrapper>
      {month.error && <ToolTip text={month.error} />}
      {year.error && <ToolTip text={year.error} />}
    </Wrapper>
  );
}
