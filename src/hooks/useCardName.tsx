import React, { useState } from "react";

function useCardName() {
  const [cardName, setCardName] = useState("");

  const changeCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardName = e.target.value;
    setCardName(cardName);
  };

  return { cardName, changeCardName };
}

export default useCardName;
