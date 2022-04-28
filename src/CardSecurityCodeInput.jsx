import React, { useState } from "react";
import Input from "./Input.jsx";
import InputField from "./InputField.jsx";
import styled from "styled-components";
import HelpIconImage from "./questionMark.svg";

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img``;

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

const cvcHelperDescription =
  "CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.";

export default function CardSecurityCodeInput({ securityCode, onChange }) {
  return (
    <InputField
      labelText="보안 코드(CVC/CVV)"
      OptionalComponent={<HelpIcon description={cvcHelperDescription} />}
    >
      <Input type="password" value={securityCode} onChange={onChange} />
    </InputField>
  );
}
