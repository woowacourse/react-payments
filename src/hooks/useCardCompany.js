import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";

const useCardCompany = () => {
  const { setCardStateByKey } = useContext(AppContext);

  const setCardCompanyState = useCallback(
    (cardCompany) => {
      setCardStateByKey(STATE_KEY.CARD_COMPANY, cardCompany);
    },
    [setCardStateByKey]
  );

  return {
    setCardCompanyState,
  };
};

export default useCardCompany;
