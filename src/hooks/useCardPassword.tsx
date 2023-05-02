import React, { useState } from "react";
import { FirstPassword, SecondPassword } from "../types/card";
import { CARD_PASSWORD, LENGTH } from "../abstract/constants";
import { toOnlyNumber } from "../util/replace";

function useCardPassword() {
  const [cardPassword, setCardPassword] = useState<
    [FirstPassword, SecondPassword]
  >(["", ""]);

  const changeCardPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const password = toOnlyNumber(e.currentTarget.value).slice(LENGTH.ZERO, 1);
    const inputID = e.currentTarget.id;

    if (inputID === CARD_PASSWORD.FIRST) {
      setCardPassword([password, cardPassword[1]]);
    }

    if (inputID === CARD_PASSWORD.SECOND) {
      setCardPassword([cardPassword[0], password]);
    }
  };

  return { cardPassword, changeCardPassword };
}

export default useCardPassword;
