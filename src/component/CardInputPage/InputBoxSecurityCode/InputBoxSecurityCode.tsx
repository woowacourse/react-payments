import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxSecurityCode.css";
import { CARD_ERROR_MESSAGE, GUIDE_MESSAGE } from "../../../CONSTANT";
import { makeAppropriateSecurityCode } from "../../../util/trans";

interface InputBoxSecurityProps {
  changeSecurityCodeStatus: (
    key: "isComplete" | "userInput",
    value: any
  ) => void;
}

export default function InputBoxSecurityCode(props: InputBoxSecurityProps) {
  const { changeSecurityCodeStatus } = props;

  const [haveError, setHaveError] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [guideClick, isGuideClick] = useState(false);

  const changeSecurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const userSecurityCode = e.target.value.slice(0, 3);
    const appropriateSecurityCode =
      makeAppropriateSecurityCode(userSecurityCode);

    if (userSecurityCode !== appropriateSecurityCode) {
      setHaveError(true);
      changeSecurityCodeStatus("isComplete", false);
    } else {
      setHaveError(false);
      changeSecurityCodeStatus("isComplete", true);
      changeSecurityCodeStatus("userInput", appropriateSecurityCode);
    }

    setSecurityCode(appropriateSecurityCode);
  };

  const changeGuideClick = () => {
    isGuideClick(!guideClick);
  };

  return (
    <div className="input-box-security-code">
      <p>보안 코드(CVC/CVV)</p>
      <Input
        name="security-code"
        className="input-security-code"
        type="password"
        onChange={changeSecurityCode}
        inputMode="numeric"
        value={securityCode}
      />
      <button
        className="button-security-code"
        type="button"
        onClick={changeGuideClick}
      >
        ?
      </button>
      {guideClick && (
        <p className="guide-security-code">{GUIDE_MESSAGE.SECURITY_CODE}</p>
      )}
      <p className="error-message">
        {haveError && CARD_ERROR_MESSAGE.INPUT_CARD_SECURITY}
      </p>
    </div>
  );
}
