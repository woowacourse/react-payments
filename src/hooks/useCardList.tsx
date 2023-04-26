import { useState } from "react";
import { CardListProps } from "src/interfaces";
import { getItem, setItem } from "src/utils/localStorage";

interface Props {
  key: string;
  initialValue?: Array<CardListProps>;
}

function useCardList({ key, initialValue }: Props) {
  const saved = getItem(key);
  const savedList = (saved ? JSON.parse(saved) : []) as Array<CardListProps>;

  const [cardList, setCardList] = useState<Array<CardListProps>>([
    ...(initialValue ?? []),
    ...savedList,
  ]);

  const saveCard = (cardInfo: CardListProps) => {
    const savedData = JSON.stringify([...cardList, cardInfo]);
    setItem(key, savedData);

    setCardList((prev) => [...prev, cardInfo]);
  };

  return { cardList, saveCard };
}

export default useCardList;
