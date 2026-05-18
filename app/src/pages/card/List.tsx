import { useEffect, useState } from "react";
import { getCards } from "../../features/card/Api";
import CardList from "../../features/card/components/CardListSection";
import type { CardListStatus } from "../../features/card/components/CardListSection";

export default function CardListPage() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState<CardListStatus>("pending");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const allCards = await getCards();
        const fetched = allCards ?? [];
        setCards(fetched);
        setStatus(fetched.length ? "success" : "empty");
      } catch {
        setStatus("error");
      }
    };
    fetchCards();
  }, []);

  return <CardList cards={cards} status={status} />;
}
