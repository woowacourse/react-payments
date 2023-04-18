import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

export default function InputBoxSecurityCode() {
  const [error, setError] = useState(false);

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    // setNameLength(event.target.value.trim().length);
  };

  return (
    <div>
      <p>보안 코드(CVC/CVV)</p>
      <Input
        type="number"
        onChange={onChangeCallback}
        placeholder="X X X"
        inputMode="numeric"
      ></Input>
      <button type="button">?</button>
      <p>error message</p>
    </div>
  );
}
