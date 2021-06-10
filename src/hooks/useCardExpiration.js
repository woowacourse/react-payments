import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import { AppContext } from "../contexts/appContext";

const useCardExpiration = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardExpirationState = cardState[STATE_KEY.CARD_EXPIRATION];

  const setCardExpirationState = useCallback(
    (cardExpiration) => {
      setCardStateByKey(STATE_KEY.CARD_EXPIRATION, cardExpiration);
    },
    [setCardStateByKey]
  );

  return {
    cardExpirationState,
    setCardExpirationState,
  };
};

export default useCardExpiration;
