import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardExpiration = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardExpirationState = cardState[STATE_KEY.CARD_EXPIRATION];

  const setCardExpirationState = useCallback(
    (cardExpiration) => {
      setCardStateByKey(STATE_KEY.CARD_EXPIRATION, cardExpiration);
    },
    [setCardStateByKey]
  );

  const onCardExpirationInputChange = useCallback(
    (event) => {
      const { value, name } = event.target;

      if (!isNumberText(value)) {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      setCardExpirationState({
        ...cardExpirationState,
        [name]: value,
      });
    },
    [cardExpirationState, setCardExpirationState]
  );

  return {
    cardExpirationState,
    onCardExpirationInputChange,
  };
};

export default useCardExpiration;
