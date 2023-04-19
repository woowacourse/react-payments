import { ChangeEvent } from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  background-color: #ecebf1;
  justify-content: space-between;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const Dash = styled.span`
  margin: 0 7px;
`;

export default function CardNumberInput() {
  return (
    <Wrapper>
      <Input
        isNumber={true}
        maxLength={4}
        id="cardNumber"
        type="text"
        inputMode="numeric"
        textAlign="center"
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="text"
        inputMode="numeric"
        textAlign="center"
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        inputMode="numeric"
        textAlign="center"
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        inputMode="numeric"
        textAlign="center"
      />
    </Wrapper>
  );
}
