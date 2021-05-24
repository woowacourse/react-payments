import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import { AppContext } from "../contexts/appContext";

const useCardOwner = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardOwnerState = cardState[STATE_KEY.CARD_OWNER];

  const setCardOwnerState = useCallback(
    (cardOwner) => {
      setCardStateByKey(STATE_KEY.CARD_OWNER, cardOwner);
    },
    [setCardStateByKey]
  );

  return {
    cardOwnerState,
    setCardOwnerState,
  };
};

export default useCardOwner;
