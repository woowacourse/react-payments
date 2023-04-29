import { useCardDispatch, useCardState } from "./useCard";

function useCardAlias() {
  const dispatch = useCardDispatch();

  const { cardAlias } = useCardState();
  const setCardAlias = (value: string) =>
    dispatch({ type: "SET_CARD_ALIAS", cardAlias: value });

  const changeCardAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardAlias = e.target.value;

    setCardAlias(cardAlias);
  };

  return { cardAlias, changeCardAlias };
}

export default useCardAlias;
