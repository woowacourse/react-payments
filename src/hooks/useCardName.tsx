import React, { useState, useCallback } from "react";

function useCardName() {
  const [cardName, setCardName] = useState("");

  const changeCardName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const cardName = e.target.value;
      setCardName(cardName);
    },
    []
  );

  return { cardName, changeCardName };
}

export default useCardName;
