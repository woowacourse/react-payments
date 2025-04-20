import { useCallback, useState } from "react";
import { INITIAL_CARD_PASSWORD_SATE } from "../constants";
import type { CardPasswordState } from "../types";
import { validateCardPassword } from "../validation";

const useControlledCardPassword = () => {
  const [cardPasswordState, setCardPasswordState] = useState<CardPasswordState>(
    INITIAL_CARD_PASSWORD_SATE
  );

  const handleCardPasswordChange = useCallback((value: string) => {
    if (value.length > 2) {
      return;
    }

    setCardPasswordState({
      value,
      errorMessage: validateCardPassword(value),
    });
  }, []);

  return {
    cardPasswordState,
    handleCardPasswordChange,
  };
};

export default useControlledCardPassword;
