import { useCallback, useState } from "react";
import { INITIAL_CARD_OWNER_SATE } from "../constants";
import { CardOwnerState } from "../types";
import { validateCardOwner } from "../validation";

const useControlledCardOwner = () => {
  const [cardOwner, setCardOwner] = useState<CardOwnerState>(
    INITIAL_CARD_OWNER_SATE
  );

  const handleCardOwnerChange = useCallback((value: string) => {
    if (value.length > 15) {
      return;
    }

    setCardOwner({
      value,
      errorMessage: validateCardOwner(value),
    });
  }, []);

  return {
    cardOwner,
    handleCardOwnerChange,
  };
};

export default useControlledCardOwner;
