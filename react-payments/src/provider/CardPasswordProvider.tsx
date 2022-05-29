import { createContext, useState } from "react";
import useReady from "../hooks/useReady";
import { CardPassword, CardPasswordContextProvider, Target } from "../types";
import {
  isCompletePasswordInput,
  isInValidCardPassword,
} from "../util/validator";

const initialCardPassword: CardPassword = {
  first: "",
  second: "",
};

export const CardPasswordContext = createContext<CardPasswordContextProvider>({
  state: { cardPassword: initialCardPassword, cardPasswordReady: false },
  action: {
    onChangeCardPassword: ({ target }) => null,
    onClickCardPasswordBackspaceButton: () => null,
    onClickCardPasswordVirtualKeyboard: (value) => null,
    resetCardPassword: () => null,
  },
});

const CardPasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardPassword, setCardPassword] = useState(initialCardPassword);
  const [cardPasswordReady] = useReady(cardPassword, isInValidCardPassword);

  const onChangeCardPassword = ({ target }: Target) => {
    if (target.name === "first" || target.name === "second") {
      setCardPassword({
        [target.name]: target.value,
      });
    }
  };

  const onClickCardPasswordVirtualKeyboard = (value: string) => {
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
      if (prev.first === undefined || prev.second === undefined) {
        return prev;
      }
      if (prev.second === "") {
        return { ...prev, first: prev.first.slice(0, -1) };
      }
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  const resetCardPassword = () => {
    setCardPassword({ ...initialCardPassword });
  };

  return (
    <CardPasswordContext.Provider
      value={{
        state: { cardPassword, cardPasswordReady },
        action: {
          onChangeCardPassword,
          onClickCardPasswordBackspaceButton,
          onClickCardPasswordVirtualKeyboard,
          resetCardPassword,
        },
      }}
    >
      {children}
    </CardPasswordContext.Provider>
  );
};

export default CardPasswordProvider;
