import React, { useCallback, useState } from "react";
import { toOnlyNumber } from "../util/replace";
import { LENGTH, STRING } from "../abstract/constants";

function useCardDate() {
  const [cardDate, setCardDate] = useState("");

  const changeCardDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateString = toOnlyNumber(e.target.value).slice(
        LENGTH.ZERO,
        LENGTH.DATE
      );

      const expirationDate = dateString.match(/.{1,2}/g);
      const resultDate = expirationDate
        ? expirationDate.join(STRING.SLASH)
        : "";

      setCardDate(resultDate);
    },
    [cardDate]
  );

  return { cardDate, changeCardDate };
}

export default useCardDate;
