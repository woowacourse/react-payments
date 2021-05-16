import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardCVC = () => {
  const { setCardStateByKey } = useContext(AppContext);

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
