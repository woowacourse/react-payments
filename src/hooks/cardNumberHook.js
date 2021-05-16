import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardNumber = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardNumberState = cardState[STATE_KEY.CARD_NUMBER];

  const setCardNumberState = useCallback(
    (cardNumber) => {
      setCardStateByKey(STATE_KEY.CARD_NUMBER, cardNumber);
    },
    [setCardStateByKey]
  );

  const onCardNumberInputChange = useCallback(
    (event) => {
      const { value, name } = event.target;

      if (!isNumberText(value)) {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      if (!(name in cardNumberState)) {
        return;
      }

      setCardNumberState({
        ...cardNumberState,
        [name]: value,
      });
    },
    [cardNumberState, setCardNumberState]
  );

  return {
    cardNumberState,
    onCardNumberInputChange,
  };
};

export default useCardNumber;
