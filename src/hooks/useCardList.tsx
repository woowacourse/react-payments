import { useState } from "react";
import { CardInfoType } from "src/context/CardInfoContext";
import { getItem, setItem } from "src/utils/localStorage";

interface Props {
  key: string;
  initialValue?: Array<CardInfoType>;
}

function useCardList({ key, initialValue }: Props) {
  const saved = getItem(key);
  const savedList = (saved ? JSON.parse(saved) : []) as Array<CardInfoType>;

  const [cardList, setCardList] = useState<Array<CardInfoType>>([
    ...(initialValue ?? []),
    ...savedList,
  ]);

  const saveCard = (cardInfo: CardInfoType) => {
    const savedData = JSON.stringify([...cardList, cardInfo]);
    setItem(key, savedData);

    setCardList((prev) => [...prev, cardInfo]);
  };

  return { cardList, saveCard };
}

export default useCardList;
