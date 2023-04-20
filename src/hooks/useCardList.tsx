import { useState } from "react";
import { CardInfoType } from "src/components/RegisterForm/InputValueContext";

interface Props {
  key: string;
  initialValue?: Array<CardInfoType>;
}

function useCardList({ key, initialValue }: Props) {
  const saved = localStorage.getItem(key);
  const savedList = (saved ? JSON.parse(saved) : []) as Array<CardInfoType>;

  const [cardList, setCardList] = useState<Array<CardInfoType>>([
    ...(initialValue ?? []),
    ...savedList,
  ]);

  const saveCard = (cardInfo: CardInfoType) => {
    const savedData = JSON.stringify([...cardList, cardInfo]);
    localStorage.setItem(key, savedData);

    setCardList((prev) => [...prev, cardInfo]);
  };

  return { cardList, saveCard };
}

export default useCardList;
