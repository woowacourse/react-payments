import { useCardDispatch, useCardState } from "./useCard";

function useCardDate() {
  const dispatch = useCardDispatch();

  const { cardDate } = useCardState();
  const setCardDate = (value: string) =>
    dispatch({ type: "SET_CARD_DATE", cardDate: value });

  const changeCardDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.currentTarget.value.replace(/[^\d]/g, "").slice(0, 4);

    const expirationDate = dateString.match(/.{1,2}/g);

    const resultDate = expirationDate ? expirationDate.join("/") : "";

    setCardDate(resultDate);
  };

  const isValid = (date: string) => {
    const [MM, YY] = date.split("/");

    if (!MM || +MM < 1 || +MM > 12) return false;
    if (!YY || YY.length < 2) return false;

    return true;
  };

  return { cardDate, changeCardDate, isValid };
}

export default useCardDate;
