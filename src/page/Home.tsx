import { useEffect, useState } from "react";
import { CardList } from "../components/cardList/CardList";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";
import cardHandler from "../domain/creditCards";

export const Home = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const savedData = cardHandler.getCards();
    setCards(savedData);
  }, []);

  return (
    <>
      <Header text="보유카드" />
      <CardList cards={cards} />
    </>
  );
};
