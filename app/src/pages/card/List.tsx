import { useEffect, useState } from "react";
import { getCards } from "../../features/card/Api";
import CardList from "../../features/card/components/CardList";

export default function CardListPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await getCards();
      setCards(allCards);
    };
    fetchCards;
  }, []);

  return <CardList cards={cards} />;
}
