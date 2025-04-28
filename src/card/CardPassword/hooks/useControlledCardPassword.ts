import { useCallback, useState } from "react";
import { INITIAL_CARD_PASSWORD_SATE } from "../constants";
import type { CardPasswordState } from "../types";
import { validateCardPassword } from "../validation";

export interface ControlledCardPassword {
  cardPasswordState: CardPasswordState;
  handleCardPasswordChange: (value: string) => void;
  isNextStep: boolean;
}

const useControlledCardPassword = (): ControlledCardPassword => {
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

  const checkPasswordNextStep = useCallback(
    ({ value, errorMessage }: CardPasswordState) =>
      value.length === 2 && errorMessage === "",
    []
  );

  return {
    cardPasswordState,
    handleCardPasswordChange,
    isNextStep: checkPasswordNextStep(cardPasswordState),
  };
};

export default useControlledCardPassword;
