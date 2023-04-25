import { useState } from "react";

function useCardOwnerName() {
  const [cardOwnerName, setCardOwnerName] = useState("");

  const changeCardOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCardOwnerName(name);
  };

  return { cardOwnerName, changeCardOwnerName };
}

export default useCardOwnerName;
