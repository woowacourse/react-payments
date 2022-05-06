import styled from "styled-components";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../../constants/constants";

const StyledInputCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.isComplete ? "#04c09e" : "#525252")};
  letter-spacing: -0.085em;
`;

function InputCounter({ currLength = "0", maxLength, isComplete }) {
  return (
    <StyledInputCounter isComplete={isComplete}>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

export default function CardHolderNameInput({ holderName, onChange }) {
  return (
    <InputField
      labelText={"카드 소유자 이름 (선택)"}
      wrapperWidth={"100%"}
      horizontalAlign={"flex-start"}
      errorMessage={"카드 소유자 이름은 영문 대문자만 입력해주세요."}
      isComplete={holderName.value !== ""}
      OptionalComponent={
        <InputCounter
          currLength={holderName.value.length}
          maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
          isComplete={holderName.value !== ""}
        />
      }
    >
      <Input
        name={"holderName"}
        className={"holderName"}
        value={holderName.value}
        type={"text"}
        placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
        width={"100%"}
        textAlign={"left"}
        maxLength={30}
        onChange={(e) => onChange(e, holderName.keyType)}
        isComplete={holderName.value !== ""}
      />
    </InputField>
  );
}
