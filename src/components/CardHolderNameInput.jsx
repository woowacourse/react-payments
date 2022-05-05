import styled from "styled-components";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

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
  const { holderNameLabelInfo, holderNameInfo } = holderName;

  return (
    <InputField
      labelText={holderNameLabelInfo.labelText}
      wrapperWidth={holderNameLabelInfo.wrapperWidth}
      horizontalAlign={holderNameLabelInfo.horizontalAlign}
      errorMessage={holderNameLabelInfo.errorMessage}
      isComplete={holderNameInfo.value !== ""}
      OptionalComponent={
        <InputCounter
          currLength={holderNameInfo.value.length}
          maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
          isComplete={holderNameInfo.value !== ""}
        />
      }
    >
      <Input
        dataTargetGroup={holderNameInfo.className}
        className={holderNameInfo.className}
        name={holderNameInfo.name}
        value={holderNameInfo.value}
        type={holderNameInfo.type}
        placeholder={holderNameInfo.placeholder}
        width={holderNameInfo.width}
        textAlign={holderNameInfo.textAlign}
        maxLength={holderNameInfo.maxLength}
        required={holderNameInfo.required}
        onChange={(e) => onChange(e, holderNameInfo.keyType)}
        isComplete={holderNameInfo.value !== ""}
      />
    </InputField>
  );
}
