import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import { AppContext } from "../contexts/appContext";

const useCardCVC = () => {
  const { setCardStateByKey } = useContext(AppContext);

  const setCardCVCState = useCallback(
    (cardCVC) => {
      setCardStateByKey(STATE_KEY.CARD_CVC, cardCVC);
    },
    [setCardStateByKey]
  );

  return {
    setCardCVCState,
  };
};

export default useCardCVC;
