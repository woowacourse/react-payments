import { useCardDispatch, useCardState } from "../../contexts/CardContext";

function useCardCVC() {
  const dispatch = useCardDispatch();

  const { cardCVC } = useCardState();
  const setCardCVC = (value: string) =>
    dispatch({ type: "SET_CARD_CVC", cardCVC: value });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = e.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setCardCVC(cvc);
  };

  const validate = () => cardCVC.length === 3;

  return { cardCVC, changeCardCVC, validate };
}

export default useCardCVC;
