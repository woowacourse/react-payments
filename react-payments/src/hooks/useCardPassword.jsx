import { useState } from "react";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });

  const onChangeCardPassword = (e) => {
    if (e.target.value.length > 1) {
      return;
    }
    setCardPassword({
      ...cardPassword,
      [e.target.name]: e.target.value,
    });
  };

  return [cardPassword, onChangeCardPassword];
};

export default useCardPassword;
