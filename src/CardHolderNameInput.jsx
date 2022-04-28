import React from "react";
import Input from "./Input.jsx";
import InputField from "./InputField.jsx";
import styled from "styled-components";

const StyledInputCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: #525252;
  letter-spacing: -0.085em;
`;

function InputCounter({ currLength = "0", maxLength }) {
  return (
    <StyledInputCounter>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

export default function CardHolderNameInput({ holderName, onChange }) {
  return (
    <InputField
      labelText="카드 소유자 이름 (선택)"
      OptionalComponent={
        <InputCounter currLength={holderName.length} maxLength="30" />
      }
      wrapperWidth="100%"
      horizontalAlign="flex-start"
    >
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="text"
        value={holderName}
        onChange={onChange}
        width="100%"
        textAlign="left"
      />
    </InputField>
  );
}
