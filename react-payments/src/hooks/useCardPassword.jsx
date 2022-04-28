import { useState } from "react";
import { MAX_LENGTH } from "../constants";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });

  const onChangeCardPassword = ({ target }) => {
    setCardPassword({
      [target.name]: target.value,
    });
  };

  const onClickCardPasswordVirtualKeyboard = (value) => {
    if (cardPassword.length >= MAX_LENGTH.CARD_PASSWORD) {
      return;
    }

    if (cardPassword.first === "") {
      setCardPassword((prev) => {
        return { ...prev, first: prev.first + value };
      });
      return;
    }

    setCardPassword((prev) => {
      return { ...prev, second: prev.second + value };
    });
  };

  const onClickCardPasswordBackspaceButton = () => {
    if (cardPassword.second === "") {
      setCardPassword((prev) => {
        return { ...prev, first: prev.first.slice(0, -1) };
      });
      return;
    }

    setCardPassword((prev) => {
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  return [
    cardPassword,
    onClickCardPasswordBackspaceButton,
    onClickCardPasswordVirtualKeyboard,
    onChangeCardPassword,
  ];
};

export default useCardPassword;
