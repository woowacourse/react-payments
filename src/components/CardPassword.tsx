import React, { useState } from "react";
import Input from "./common/Input";
import FormLabel from "./common/FormLabel";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";

interface CardPasswordObj {
  first: string;
  second: string;
}

function CardPassword() {
  const [password, setPassword] = useState({
    first: "",
    second: "",
  });

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;
    const name = event.currentTarget.dataset["order"] as keyof CardPasswordObj;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <FormLabel>{"카드 비밀번호"}</FormLabel>
      <div style={{ display: "flex" }}>
        <Input
          data-order="first"
          value={password["first"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
        />
        <Input
          data-order="second"
          value={password["second"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
        />
        <div>●</div>
        <div>●</div>
      </div>
    </div>
  );
}

export default CardPassword;
