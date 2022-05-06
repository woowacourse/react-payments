import React, { useContext, useState } from "react";
import Input from "./UIComponents/Input/Input.jsx";
import InputField from "./UIComponents/InputField/InputField.jsx";
import styled from "styled-components";
import HelpIconImage from "../assets/images/questionMark.svg";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants.js";
import CardInfoContext from "../Pages/CardInfoContext.jsx";

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

const HelpIcon = React.memo(({ description }) => {
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
});

const SECURITY_CODE_DESCRIPTION =
  "CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.";

export default function CardSecurityCodeInput() {
  const [isInvalid, setInvalid] = useState(false);

  const { state, setState } = useContext(CardInfoContext);

  const { securityCodeLength } = state;

  const handleInputChange = (e) => {
    setInvalid(false);

    setState({ ...state, securityCodeLength: e.target.value.length });
  };

  return (
    <InputField
      labelText={"보안 코드(CVC/CVV)"}
      wrapperWidth={"xs"}
      isInvalid={isInvalid}
      isComplete={securityCodeLength === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
      OptionalComponent={<HelpIcon description={SECURITY_CODE_DESCRIPTION} />}
    >
      <Input
        type={"password"}
        placeholder={CREATE_MASKED_CHARACTERS(3)}
        name={"security-code"}
        maxLength={3}
        required
        width={"full"}
        isComplete={securityCodeLength === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
        pattern={"^[0-9]+$"}
        onInvalid={() => setInvalid(true)}
        onChange={handleInputChange}
        data-testid={"security-code"}
      />
    </InputField>
  );
}
