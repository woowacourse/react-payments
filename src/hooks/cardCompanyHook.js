import { useCallback } from "react";
import { STATE_KEY } from "../constants";
import { isNumberText } from "../utils/cardInputValidation";

const useCardCompany = (cardState, setCardStateByKey) => {
  const setCardCompanyState = useCallback(
    (cardCompany) => {
      setCardStateByKey(STATE_KEY.CARD_COMPANY, cardCompany);
    },
    [setCardStateByKey]
  );

  const onCardCompanyInputChange = useCallback(
    (event) => {
      const { value } = event.target;

      if (!isNumberText(value)) {
        event.target.value = event.target.value.slice(0, -1);
        return;
      }

      setCardCompanyState(value);
    },
    [setCardCompanyState]
  );

  return {
    setCardCompanyState,
    onCardCompanyInputChange,
  };
};

export default useCardCompany;
