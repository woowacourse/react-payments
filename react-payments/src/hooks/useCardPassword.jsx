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

  return {
    cardPassword,
    onClickCardPasswordBackspaceButton,
    onClickCardPasswordVirtualKeyboard,
    onChangeCardPassword,
    cardPasswordReady,
  };
};

export default useCardPassword;
