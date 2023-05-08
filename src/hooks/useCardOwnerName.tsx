import React, { useState, useCallback } from "react";

function useCardOwnerName() {
  const [cardOwnerName, setCardOwnerName] = useState("");

  const changeCardOwnerName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value;
      setCardOwnerName(name);
    },
    []
  );

  return { cardOwnerName, changeCardOwnerName };
}

export default useCardOwnerName;
