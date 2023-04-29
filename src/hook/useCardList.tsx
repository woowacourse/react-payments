import { useContext } from "react";
import { CardListContext } from "../context/cardListContext";

export const useCardList = () => {
  const value = useContext(CardListContext);

  if (value === undefined) {
    throw new Error(
      "useCard는 CardProvider children 컴포넌트에서만 사용가능합니다."
    );
  }

  return value;
};
