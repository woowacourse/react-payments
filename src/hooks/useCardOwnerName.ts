import { useCardDispatch, useCardState } from "./useCard";

function useCardOwnerName() {
  const dispatch = useCardDispatch();

  const { cardOwnerName } = useCardState();
  const setCardOwnerName = (value: string) =>
    dispatch({ type: "SET_CARD_OWNER_NAME", cardOwnerName: value });

  const changeCardOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCardOwnerName(name);
  };

  return { cardOwnerName, changeCardOwnerName };
}

export default useCardOwnerName;
