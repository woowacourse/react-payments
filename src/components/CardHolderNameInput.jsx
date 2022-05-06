import React, { useCallback, useContext, useState } from "react";
import Input from "./UIComponents/Input/Input.jsx";
import InputField from "./UIComponents/InputField/InputField.jsx";
import styled from "styled-components";
import { CARD_INFO_RULES } from "../constants.js";
import CardInfoContext from "../Pages/CardInfoContext.jsx";

const StyledInputCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) =>
    props.state === "error"
      ? "#d82424"
      : props.state === "complete"
      ? "#04c09e"
      : "#525252"};
  letter-spacing: -0.085em;
`;

function InputCounter({ currLength = "0", maxLength, state }) {
  return (
    <StyledInputCounter state={state}>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

export default function CardHolderNameInput() {
  const [isInvalid, setInvalid] = useState(false);

  const { state, setState } = useContext(CardInfoContext);

  const { holderName } = state;

  const handleInputChange = (e) => {
    setInvalid(false);

    setState({ ...state, holderName: e.target.value.toUpperCase() });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <InputField
      labelText={"카드 소유자 이름 (선택)"}
      wrapperWidth={"full"}
      horizontalAlign={"flex-start"}
      isComplete={holderName !== ""}
      OptionalComponent={
        <InputCounter
          currLength={holderName.length}
          maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
          state={
            isInvalid ? "error" : holderName !== "" ? "complete" : "default"
          }
        />
      }
      isInvalid={isInvalid}
    >
      <Input
        type={"text"}
        value={holderName}
        placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
        name={"holder-name"}
        maxLength={30}
        width={"full"}
        textAlign={"left"}
        isComplete={holderName !== ""}
        onChange={handleInputChange}
        pattern={"^[a-zA-Z]+$"}
        onInvalid={triggerInvalid}
        data-testid={"holder-name"}
      />
    </InputField>
  );
}
