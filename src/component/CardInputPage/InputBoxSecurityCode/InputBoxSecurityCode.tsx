import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxSecurityCode.css";

export default function InputBoxSecurityCode() {
  const [error, setError] = useState(true);

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    // setNameLength(event.target.value.trim().length);
  };

  return (
    <div className="input-box-security-code">
      <p>보안 코드(CVC/CVV)</p>
      <Input
        className="input-security-code"
        type="number"
        onChange={onChangeCallback}
        placeholder="X X X"
        inputMode="numeric"
      ></Input>
      <button className="button-security-code" type="button">
        ?
      </button>
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}
