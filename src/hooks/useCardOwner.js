import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardCVC = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardOwnerState = cardState[STATE_KEY.CARD_OWNER];

  const setCardOwnerState = useCallback(
    (cardOwner) => {
      setCardStateByKey(STATE_KEY.CARD_OWNER, cardOwner);
    },
    [setCardStateByKey]
  );

  const onCardOwnerInputChange = useCallback(
    (event) => {
      const { value } = event.target;

      if (isNumberText(value) && value !== "") {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      setCardOwnerState(value);
    },
    [setCardOwnerState]
  );

  return {
    cardOwnerState,
    onCardOwnerInputChange,
  };
};

export default useCardCVC;
