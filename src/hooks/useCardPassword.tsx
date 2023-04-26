import React, { useState } from "react";
import { FirstPassword, SecondPassword } from "../types/card";
import { ID, LENGTH } from "../abstract/constants";
import { toOnlyNumber } from "../util/InputUtil";

function useCardPassword() {
  const [cardPassword, setCardPassword] = useState<
    [FirstPassword, SecondPassword]
  >(["", ""]);

  const changeCardPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const password = toOnlyNumber(e.currentTarget.value).slice(LENGTH.ZERO, 1);
    const inputID = e.currentTarget.id;

    if (inputID === ID.FIRST) {
      setCardPassword([password, cardPassword[1]]);
    }

    if (inputID === ID.SECOND) {
      setCardPassword([cardPassword[0], password]);
    }
  };

  return { cardPassword, changeCardPassword };
}

export default useCardPassword;
