import { createContext, useState } from "react";
import useReady from "../hooks/useReady";
import {
  isCompletePasswordInput,
  isInValidCardPassword,
} from "../util/validator";

export const CardPasswordContext = createContext({
  first: "",
  second: "",
});

const CardPasswordProvider = ({ children }) => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });
  const [cardPasswordReady] = useReady(cardPassword, isInValidCardPassword);

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
      if (prev.first === "") {
        return { ...prev, first: prev.first + value };
      }
      return { ...prev, second: prev.second + value };
    });
  };

  const onClickCardPasswordBackspaceButton = () => {
    setCardPassword((prev) => {
      if (prev.second === "") {
        return { ...prev, first: prev.first.slice(0, -1) };
      }
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  return (
    <CardPasswordContext.Provider
      value={{
        state: { cardPassword, cardPasswordReady },
        action: {
          onChangeCardPassword,
          onClickCardPasswordBackspaceButton,
          onClickCardPasswordVirtualKeyboard,
        },
      }}
    >
      {children}
    </CardPasswordContext.Provider>
  );
};

export default CardPasswordProvider;
