import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import { AppContext } from "../contexts/appContext";

const useCardPassword = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardPassword = cardState[STATE_KEY.CARD_PASSWORD];

  const setCardPasswordState = useCallback(
    (cardPassword) => {
      setCardStateByKey(STATE_KEY.CARD_PASSWORD, cardPassword);
    },
    [setCardStateByKey]
  );

  return {
    cardPassword,
    setCardPasswordState,
  };
};

export default useCardPassword;
