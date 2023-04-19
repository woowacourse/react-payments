import { useState } from "react";
import Input from "../../common/Input";

import "./inputBoxExpirationDate.css";

export default function InputBoxExpirationDate() {
  const [error, setError] = useState(true);

  return (
    <div className="input-box-expiration-date">
      <p>만료일</p>
      <Input
        className="input-expiration-date"
        type="number"
        onChange={() => {}}
        placeholder="MM / YY"
        inputMode="numeric"
      ></Input>
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}
