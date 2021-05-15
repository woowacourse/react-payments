import { useCallback } from "react";
import { STATE_KEY } from "../constants";
import { isNumberText } from "../utils/cardInputValidation";

const useCardCVC = (cardState, setCardStateByKey) => {
  const setCardCVCState = useCallback(
    (cardCVC) => {
      setCardStateByKey(STATE_KEY.CARD_CVC, cardCVC);
    },
    [setCardStateByKey]
  );

  const onCardCVCInputChange = useCallback(
    (event) => {
      const { value } = event.target;

      if (!isNumberText(value)) {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      setCardCVCState(value);
    },
    [setCardCVCState]
  );

  return {
    onCardCVCInputChange,
  };
};

export default useCardCVC;
