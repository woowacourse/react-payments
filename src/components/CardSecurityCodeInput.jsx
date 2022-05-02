import React, { useState } from 'react';
import styled from 'styled-components';

import Input from './common/Input.jsx';
import InputField from './common/InputField.jsx';

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from '../constants';

import HelpIconImage from '../assets/images/questionMark.svg';

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled.p`
  ${props => !props.isOpen && `display: none;`}
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
      <StyledIcon src={HelpIconImage} onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} />
      <StyledDescription isOpen={isDescriptionOpen}>{description}</StyledDescription>
    </StyledIconContainer>
  );
}

const SECURITY_CODE_DESCRIPTION = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

export default function CardSecurityCodeInput({ securityCode, onChange }) {
  return (
    <InputField
      labelText="보안 코드(CVC/CVV)"
      OptionalComponent={<HelpIcon description={SECURITY_CODE_DESCRIPTION} />}
      wrapperWidth="85px"
      isComplete={securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH}>
      <Input
        type="password"
        value={securityCode}
        onChange={onChange}
        placeholder={CREATE_MASKED_CHARACTERS(3)}
        width="100%"
        isComplete={securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
      />
    </InputField>
  );
}
