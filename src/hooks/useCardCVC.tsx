import React, { useState } from "react";
import { toOnlyNumber } from "../util/InputUtil";
import { LENGTH } from "../abstract/constants";

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState("");

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = toOnlyNumber(e.target.value).slice(LENGTH.ZERO, LENGTH.CVC);
    setCardCVC(cvc);
  };

  return { cardCVC, changeCardCVC };
}

export default useCardCVC;
