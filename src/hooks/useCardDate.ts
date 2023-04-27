import { useCardDispatch, useCardState } from "./useCard";

function useCardDate() {
  const dispatch = useCardDispatch();

  const { cardDate } = useCardState();
  const setCardDate = (value: string) =>
    dispatch({ type: "SET_CARD_DATE", cardDate: value });

  const changeCardDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.currentTarget.value.replace(/[^\d]/g, "").slice(0, 4);

    const expirationDate = dateString.match(/.{1,2}/g);

    e.currentTarget.setCustomValidity(
      expirationDate && isValid(expirationDate[0], expirationDate[1])
        ? ""
        : "올바른 유효 기간을 입력해야 합니다."
    );

    const resultDate = expirationDate ? expirationDate.join("/") : "";

    setCardDate(resultDate);
  };

  const isValid = (MM: string, YY: string) => {
    if (!MM || +MM < 1 || +MM > 12) return false;
    if (!YY || +YY < 23) return false;

    return true;
  };

  return { cardDate, changeCardDate };
}

export default useCardDate;
