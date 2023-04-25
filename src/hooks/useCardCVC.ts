import { useState } from "react";

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState("");

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = e.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setCardCVC(cvc);
  };

  return { cardCVC, changeCardCVC };
}

export default useCardCVC;
