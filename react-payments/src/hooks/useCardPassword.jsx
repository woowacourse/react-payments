import { useState } from "react";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });

  const onChangeCardPassword = (e) => {
    setCardPassword({
      ...cardPassword,
      [e.target.name]: e.target.value,
    });
  };

  return [cardPassword, onChangeCardPassword];
};

export default useCardPassword;
