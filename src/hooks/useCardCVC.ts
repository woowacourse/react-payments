import { useCardDispatch, useCardState } from "./useCard";

function useCardCVC() {
  const dispatch = useCardDispatch();

  const { cardCVC } = useCardState();
  const setCardCVC = (value: string) =>
    dispatch({ type: "SET_CARD_CVC", cardCVC: value });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = e.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setCardCVC(cvc);
  };

  return { cardCVC, changeCardCVC };
}

export default useCardCVC;
