import React from "react";
import { CardNumber } from "./CardNumber";
import ExpireDate from "./ExpireDate";
import OwnerNameInput from "./OwnerNameInput";
import SecurityCode from "./SecurityCode";
import CardPassword from "./CardPassword";
import styled from "styled-components";

function CardRegisterForm() {
  return (
    <Form>
      <CardNumber></CardNumber>
      <ExpireDate></ExpireDate>
      <OwnerNameInput></OwnerNameInput>
      <SecurityCode></SecurityCode>
      <CardPassword></CardPassword>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <NextButton>다음</NextButton>
      </div>
    </Form>
  );
}

export default CardRegisterForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

const NextButton = styled.button`
  width: 51px;

  background: none;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;
