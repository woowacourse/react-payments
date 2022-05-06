import React, { useCallback, useContext, useState } from "react";
import Input from "./UIComponents/Input/Input.jsx";
import styled from "styled-components";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants.js";
import CardInfoContext from "../Pages/CardInfoContext.jsx";

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
  color: ${(props) =>
    props.state === "error"
      ? "#d82424"
      : props.state === "complete"
      ? "#04c09e"
      : "#525252"};
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
  gap: 10px;

  input {
    background: #ecebf1;
    border-radius: 7px;
    width: ${(props) => props.width};
    padding: 12px;

    box-shadow: ${(props) => props.hasError && "inset 0 0 0 1px #d82424"};
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #04c09e;
`;

export default function CardPasswordInput() {
  const [isInvalid, setInvalid] = useState(false);
  // const setInputLengthArray = useArraySetState(setPasswordLength);

  // const handleInputChange = (e, order) => {
  //   setInvalid(false);
  //   setInputLengthArray(e.target.value.length, order);
  // };

  const { state, setState } = useContext(CardInfoContext);

  const { passwordLength } = state;

  const handleInputChange = (e, order) => {
    setInvalid(false);

    const newPasswordLength = [...passwordLength];
    newPasswordLength[order] = e.target.value.length;
    setState({ ...state, passwordLength: newPasswordLength });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <StyledInputField>
      <StyledLabel
        isInvalid={isInvalid}
        state={
          isInvalid
            ? "error"
            : passwordLength[0] + passwordLength[1] ===
              CARD_INFO_RULES.PASSWORD_LENGTH
            ? "complete"
            : "default"
        }
      >
        카드 비밀번호 앞 두 자리
      </StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper width={"45px"} hasError={isInvalid}>
          {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map(
            (_, index) => (
              <Input
                key={index}
                type={"password"}
                placeholder={CREATE_MASKED_CHARACTERS(1)}
                name={"password"}
                maxLength={1}
                required
                width={"full"}
                isComplete={passwordLength[index] === 1}
                onChange={(e) => handleInputChange(e, index)}
                onInvalid={triggerInvalid}
                pattern={"^[0-9]+$"}
              />
            )
          )}
        </StyledInputWrapper>
      </StyledInputContainer>
    </StyledInputField>
  );
}
