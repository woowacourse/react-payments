import React, { useCallback } from "react";
import Input from "./UIComponents/Input/Input.jsx";
import styled from "styled-components";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants.js";
import useArraySetState from "../useArraySetState.jsx";
import useValidatedUpdate from "../useValidatedUpdate.jsx";
import { cardInfoValidations } from "../cardInfoValidations.js";
import { Hash } from "../passwordHash.js";

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
  color: ${(props) => (props.isComplete ? "#04c09e" : "#525252")};
  letter-spacing: -0.085em;

  display: flex;
  gap: 10px;

  .error-message {
    color: #d82424;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props) => props.width};
  padding: 12px;

  box-shadow: ${(props) => props.hasError && "inset 0 0 0 1px #d82424"};
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #04c09e;
`;

export default function CardPasswordInput({ password, setPassword }) {
  const setPasswordArray = useArraySetState(setPassword);
  const setHashedPasswordArray = useCallback(
    (value, order) => {
      setPasswordArray(Hash.encode(value), order);
    },
    [setPasswordArray]
  );
  const [handlePasswordUpdate, errorMessage, resetError] = useValidatedUpdate(
    cardInfoValidations["password"],
    setHashedPasswordArray
  );

  return (
    <StyledInputField>
      <StyledLabel
        errorMessage={errorMessage}
        isComplete={
          password.join("").length === CARD_INFO_RULES.PASSWORD_LENGTH
        }
      >
        카드 비밀번호 앞 두 자리
        <span className="error-message">{errorMessage}</span>
      </StyledLabel>
      <StyledInputContainer>
        {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map(
          (_, index) => (
            <StyledInputWrapper
              key={index}
              width={"45px"}
              hasError={errorMessage !== ""}
            >
              <Input
                type={"password"}
                value={password[index]}
                placeholder={CREATE_MASKED_CHARACTERS(1)}
                maxLength={1}
                required
                width={"full"}
                isComplete={password[0].length === 1}
                onChange={(e) => handlePasswordUpdate(e, index)}
                onBlur={resetError}
              />
            </StyledInputWrapper>
          )
        )}
      </StyledInputContainer>
    </StyledInputField>
  );
}
