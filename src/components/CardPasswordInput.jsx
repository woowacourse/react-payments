import React, { useEffect, useRef, useState } from "react";
import Input from "./UIComponents/Input/Input.jsx";
import styled from "styled-components";
import { CREATE_MASKED_CHARACTERS } from "../constants.js";

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
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[focusInputIndex].value.length === 1) {
      const index = password.findIndex(
        (passwordDigit) => passwordDigit.length !== 1
      );
      inputRef.current[index]?.focus();
    }
  }, [password, focusInputIndex]);

  useEffect(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return (
    <StyledInputField>
      <StyledLabel>카드 비밀번호 앞 두 자리</StyledLabel>
      <StyledInputContainer>
        {Array.from({ length: 2 }).map((_, index) => (
          <StyledInputWrapper width="45px">
            <Input
              key={index}
              type="password"
              value={password[index]}
              onChange={(e) => onChange(e, index)}
              width="100%"
              placeholder={CREATE_MASKED_CHARACTERS(1)}
              onFocus={() => setFocusInputIndex(index)}
              ref={(element) => (inputRef.current[index] = element)}
            />
          </StyledInputWrapper>
        ))}
      </StyledInputContainer>
    </StyledInputField>
  );
}
