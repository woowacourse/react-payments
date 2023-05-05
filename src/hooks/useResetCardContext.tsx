import { useEffect } from "react";
import { useCardAction } from "../context/CardContext";

export function useResetCardContext() {
  const cardAction = useCardAction();

  useEffect(() => {
    cardAction({
      type: "RESET_CARD_CONTEXT",
    });
  }, []);
}
