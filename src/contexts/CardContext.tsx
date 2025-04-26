import {
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { useCardState } from "../hooks/useCardState";
import { useCardInputHandlers } from "../hooks/useCardInputHandlers";
import { useCardValidation } from "../hooks/useCardValidation";

const CardContext = createContext<ReturnType<typeof useCardState> & ReturnType<typeof useCardInputHandlers> | null>(null);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const cardState = useCardState();
  const handlers = useCardInputHandlers(cardState);
  useCardValidation(cardState);

  return (
    <CardContext.Provider
      value={{
        ...cardState,
        ...handlers,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardProvider 안에서 사용 가능");
  }
  return context;
};
