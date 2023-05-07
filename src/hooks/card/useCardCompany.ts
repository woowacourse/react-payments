import { CREDIT_CARD_COMPANY } from "types/card";
import { useCardDispatch, useCardState } from "contexts/CardContext";

function useCardCompany() {
  const dispatch = useCardDispatch();

  const { cardCompany } = useCardState();
  const setCardCompany = (value: CREDIT_CARD_COMPANY) =>
    dispatch({ type: "SET_CARD_COMPANY", cardCompany: value });

  const changeCardCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardCompany = e.target.value as CREDIT_CARD_COMPANY;

    setCardCompany(cardCompany);
  };

  return { cardCompany, changeCardCompany };
}

export default useCardCompany;
