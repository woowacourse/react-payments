import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardPassword = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardPassword = cardState[STATE_KEY.CARD_PASSWORD];

  const setCardPasswordState = useCallback(
    (cardPassword) => {
      setCardStateByKey(STATE_KEY.CARD_PASSWORD, cardPassword);
    },
    [setCardStateByKey]
  );

  const onCardPasswordInputChange = useCallback(
    (event) => {
      const { value, name: inputIndex } = event.target;
      if (!isNumberText(value)) {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      const newCardPassword = [...cardPassword];
      newCardPassword[Number(inputIndex)] = value;
      setCardPasswordState(newCardPassword);
    },
    [cardPassword, setCardPasswordState]
  );

  return {
    onCardPasswordInputChange,
  };
};

export default useCardPassword;
