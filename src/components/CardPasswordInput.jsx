import React from "react";
import Input from "./UIComponents/Input/Input.jsx";
import styled from "styled-components";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  color: #525252;
  letter-spacing: -0.085em;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props) => props.width};
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #04c09e;
`;

export default function CardPasswordInput({ password, onChange }) {
  return (
    <StyledInputField>
      <StyledLabel>카드 비밀번호 앞 두 자리</StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper width="45px">
          <Input
            type="password"
            value={password[0]}
            onChange={(e) => onChange(e, 0)}
            width="100%"
            placeholder="•"
          />
        </StyledInputWrapper>
        <StyledInputWrapper width="45px">
          <Input
            type="password"
            value={password[1]}
            onChange={(e) => onChange(e, 1)}
            width="100%"
            placeholder="•"
          />
        </StyledInputWrapper>
      </StyledInputContainer>
    </StyledInputField>
  );
}
