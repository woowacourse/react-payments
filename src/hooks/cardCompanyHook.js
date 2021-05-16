import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";
import { isNumberText } from "../utils/cardInputValidation";

const useCardCompany = () => {
  const { setCardStateByKey } = useContext(AppContext);

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
