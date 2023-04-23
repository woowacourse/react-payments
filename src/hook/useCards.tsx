import { useState, useEffect } from "react";
import { CardType } from "../types/card";

const useCards = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const savedCards = localStorage.getItem("cards");

    if (savedCards) {
      setCards(JSON.parse(savedCards));
      return;
    }

    setCards([]);
  }, []);

  const addNewCard = (newCard: CardType) => {
    const newData = [...cards, newCard];
    localStorage.setItem("cards", JSON.stringify(newData));
    setCards(newData);
  };

  return { cards, addNewCard };
};

export default useCards;
