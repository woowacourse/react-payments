import { useState } from "react";
import { CardInfoProps } from "src/interfaces";
import { getItem, setItem } from "src/utils/localStorage";

interface Props {
  key: string;
  initialValue?: Array<CardInfoProps>;
}

function useCardList({ key, initialValue }: Props) {
  const saved = getItem(key);
  const savedList = (saved ? JSON.parse(saved) : []) as Array<CardInfoProps>;
  const [cardList, setCardList] = useState<Array<CardInfoProps>>([
    ...(initialValue ?? []),
    ...savedList,
  ]);

  const saveCard = (cardInfo: CardInfoProps) => {
    const newCardList = [...cardList, cardInfo];

    setItem(key, JSON.stringify([...newCardList]));
    setCardList(newCardList);
  };

  return { cardList, saveCard };
}

export default useCardList;
