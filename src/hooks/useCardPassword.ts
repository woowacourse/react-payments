import { useState } from "react";

function useCardPassword() {
  const [cardPassword, setCardPassword] = useState<[string, string]>(["", ""]);

  const changeCardPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const password = e.currentTarget.value.replace(/[^\d]/g, "").slice(0, 1);
    const inputID = e.currentTarget.id;

    if (inputID === "first") {
      setCardPassword([password, cardPassword[1]]);
    }

    if (inputID === "second") {
      setCardPassword([cardPassword[0], password]);
    }
  };
  return { cardPassword, changeCardPassword };
}

export default useCardPassword;
