import React, { useContext, useState } from "react";
import CardInfoContext from "context/CardInfoContext.jsx";

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "utils/constants.js";

import Input from "components/UIComponents/Input/Input.jsx";
import InputField from "components/UIComponents/InputField/InputField.jsx";
import HelperIcon from "components/UIComponents/HelperIcon/HelperIcon.jsx";

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
      wrapperWidth={"sm"}
      isInvalid={isInvalid}
      isComplete={securityCodeLength === CARD_INFO_RULES.SECURITY_CODE_LENGTH}
      OptionalComponent={<HelperIcon description={SECURITY_CODE_DESCRIPTION} />}
    >
      <Input
        type={"password"}
        placeholder={CREATE_MASKED_CHARACTERS(3)}
        name={"securityCode"}
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
