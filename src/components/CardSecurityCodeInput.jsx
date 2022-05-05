import { useState } from "react";
import styled from "styled-components";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import HelpIconImage from "../assets/images/questionMark.svg";

import { CARD_INFO_RULES } from "../constants/constants";

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled.p`
  ${(props) => !props.isOpen && `display: none;`}
  position: absolute;
  top: 5px;
  right: -205px;

  max-width: 200px;
  width: max-content;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  font-size: 12px;

  background: #ffffff;
  -webkit-box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.4);
`;

const SECURITY_CODE_DESCRIPTION =
  "CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.";

function HelpIcon({ description }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <StyledIconContainer>
      <StyledIcon
        src={HelpIconImage}
        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
      />
      <StyledDescription isOpen={isDescriptionOpen}>
        {description}
      </StyledDescription>
    </StyledIconContainer>
  );
}

export default function CardSecurityCodeInput({ securityCode, onChange }) {
  return (
    <InputField
      labelText={"보안 코드(CVC/CVV)"}
      wrapperWidth={"85px"}
      errorMessage={"카드 뒷 면에 있는 3자리 숫자를 적어주세요."}
      OptionalComponent={<HelpIcon description={SECURITY_CODE_DESCRIPTION} />}
      isComplete={
        securityCode.value.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH
      }
    >
      <Input
        name={securityCode.name}
        className={securityCode.name}
        value={securityCode.value}
        type={securityCode.type}
        placeholder={securityCode.placeholder}
        width={securityCode.width}
        maxLength={securityCode.maxLength}
        required
        onChange={(e) => onChange(e, securityCode.keyType)}
        isComplete={
          securityCode.value.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH
        }
      />
    </InputField>
  );
}
