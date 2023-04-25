import { useState } from "react";

function useCardDate() {
  const [cardDate, setCardDate] = useState("");

  const changeCardDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value.replace(/[^\d]/g, "").slice(0, 4);

    const expirationDate = dateString.match(/.{1,2}/g);
    const resultDate = expirationDate ? expirationDate.join("/") : "";

    setCardDate(resultDate);
  };

  return { cardDate, changeCardDate };
}

export default useCardDate;
