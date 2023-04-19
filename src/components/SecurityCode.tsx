import React, { useState } from "react";
import FormLabel from "./common/FormLabel";
import Input from "./common/Input";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";

function SecurityCode() {
  const [code, setCode] = useState("");

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    setCode(value);
  };

  return (
    <div>
      <FormLabel>{"보안 코드(CVC/CVV)"}</FormLabel>
      <Input value={code} onChange={codeChange} maxLength={3} type="password" />
    </div>
  );
}

export default SecurityCode;
