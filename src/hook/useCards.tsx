import { useState, useEffect } from "react";
import { CardType } from "../types/card";

export const useCards = () => {
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

  const setAlias = (cardNumbers: string, alias: string) => {
    const index = cards.findIndex((card) => card.numbers === cardNumbers);
    if (index === -1) return;

    cards[index].alias = alias;

    localStorage.setItem("cards", JSON.stringify(cards));
    setCards(cards);
  };

  return { cards, addNewCard, setAlias };
};
