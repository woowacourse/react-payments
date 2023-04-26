import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxSecurityCode.css";
import { CARD_ERROR_MESSAGE } from "../../../CONSTANT";
import { makeAppropriateSecurityCode } from "../../../trans";

interface InputBoxSecurityProps {
  changeSecurityCodeStatus: (
    key: "isComplete" | "userInput",
    value: any
  ) => void;
}

export default function InputBoxSecurityCode(props: InputBoxSecurityProps) {
  const { changeSecurityCodeStatus } = props;

  const [isError, setIsError] = useState(false);
  const [securityCode, setSecurityCode] = useState("");

  const changeSecurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const userSecurityCode = e.target.value.slice(0, 3);
    const appropriateSecurityCode =
      makeAppropriateSecurityCode(userSecurityCode);

    if (userSecurityCode !== appropriateSecurityCode) {
      setIsError(true);
      changeSecurityCodeStatus("isComplete", false);
    } else {
      setIsError(false);
      changeSecurityCodeStatus("isComplete", true);
      changeSecurityCodeStatus("userInput", appropriateSecurityCode);
    }

    setSecurityCode(appropriateSecurityCode);
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
      <button className="button-security-code" type="button">
        ?
      </button>
      <p className="error-message">
        {isError && CARD_ERROR_MESSAGE.INPUT_CARD_SECURITY}
      </p>
    </div>
  );
}
