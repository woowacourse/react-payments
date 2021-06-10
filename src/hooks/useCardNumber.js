import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import { AppContext } from "../contexts/appContext";

const useCardNumber = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardNumberState = cardState[STATE_KEY.CARD_NUMBER];

  const setCardNumberState = useCallback(
    (cardNumber) => {
      setCardStateByKey(STATE_KEY.CARD_NUMBER, cardNumber);
    },
    [setCardStateByKey]
  );

  return {
    cardNumberState,
    setCardNumberState,
  };
};

export default useCardNumber;
