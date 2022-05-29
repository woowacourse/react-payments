import { ChangeEvent, useContext, useState } from "react";
import { CardInfoContext } from "../../contexts/CardInfoContext";
import styled from "styled-components";
import HelpIconImage from "../../assets/images/questionMark.svg";
import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";
import { isInvalidSecurityCode } from "../../validators/validator";
import { setSecurityCode } from "../../reducer/cardReducer";
import {
  CARD_INFO_RULES,
  CREATE_MASKED_CHARACTERS,
  GUIDE_MESSAGE,
} from "../../constants/constants";

const StyledIconContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDescription = styled.p`
  ${(props: { isOpen: boolean }) => !props.isOpen && `display: none;`}
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

export const SECURITY_CODE_DESCRIPTION =
  "CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.";

export function HelpIcon({ description }: { description: string }) {
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

export default function CardSecurityCodeInput() {
  const {
    state: { securityCode },
    dispatch,
  } = useContext(CardInfoContext);

  const handleSecurityCodeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (Number.isNaN(value) || isInvalidSecurityCode(value)) {
      event.preventDefault();
      return;
    }

    dispatch(setSecurityCode({ value }));
  };

  return (
    <InputField
      labelText={"보안 코드(CVC/CVV)"}
      wrapperWidth={"85px"}
      guideMessage={GUIDE_MESSAGE.VALID_SECURITY_CODE}
      OptionalComponent={<HelpIcon description={SECURITY_CODE_DESCRIPTION} />}
      isComplete={securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
    >
      <Input
        name={"securityCode"}
        className={"securityCode"}
        type={"password"}
        placeholder={CREATE_MASKED_CHARACTERS(
          CARD_INFO_RULES.SECURITY_CODE_LENGTH
        )}
        width={"100%"}
        maxLength={CARD_INFO_RULES.SECURITY_CODE_LENGTH}
        required
        onChange={(e) => handleSecurityCodeUpdate(e)}
        isComplete={
          securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH
        }
      />
    </InputField>
  );
}
