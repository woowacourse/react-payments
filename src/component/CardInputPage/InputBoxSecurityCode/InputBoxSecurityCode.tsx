import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxSecurityCode.css";
import { validateSecurityNumber } from "../../../validation/securityNumber";

export default function InputBoxSecurityCode() {
  const [error, setError] = useState(false);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) e.target.value = e.target.value.slice(0, 3);

    setError(!validateSecurityNumber(e.target.value));
  };

  return (
    <div className="input-box-security-code">
      <p>보안 코드(CVC/CVV)</p>
      <Input
        className="input-security-code"
        type="password"
        onChange={onChangeCallback}
        inputMode="numeric"
      ></Input>
      <button className="button-security-code" type="button">
        ?
      </button>
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}
