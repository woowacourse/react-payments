import { useState } from "react";
import Input from "../../common/Input";

export default function InputBoxExpirationDate() {
  const [error, setError] = useState(false);

  return (
    <div>
      <p>만료일</p>
      <Input
        type="number"
        onChange={() => {}}
        placeholder="MM / YY"
        inputMode="numeric"
      ></Input>
      <p>error message</p>
    </div>
  );
}
