import { useEffect, useState } from "react";
import {
  isInValidCardPassword,
  isCompletePasswordInput,
} from "../util/validator";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });
  const [cardPasswordReady, setCardPasswordReady] = useState(false);

  useEffect(() => {
    if (isInValidCardPassword(cardPassword) === cardPasswordReady) {
      setCardPasswordReady((prev) => !prev);
    }
  }, [cardPassword, cardPasswordReady]);

  const onChangeCardPassword = ({ target }) => {
    setCardPassword({
      [target.name]: target.value,
    });
  };

  const onClickCardPasswordVirtualKeyboard = (value) => {
    if (isCompletePasswordInput(cardPassword)) {
      return;
    }

    setCardPassword((prev) => {
      if (cardPassword.first === "") {
        return { ...prev, first: prev.first + value };
      }
      return { ...prev, second: prev.second + value };
    });
  };

  const onClickCardPasswordBackspaceButton = () => {
    setCardPassword((prev) => {
      if (cardPassword.second === "") {
        return { ...prev, first: prev.first.slice(0, -1) };
      }
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  return {
    cardPassword,
    onClickCardPasswordBackspaceButton,
    onClickCardPasswordVirtualKeyboard,
    onChangeCardPassword,
    cardPasswordReady,
  };
};

export default useCardPassword;
