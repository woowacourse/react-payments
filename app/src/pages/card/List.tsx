import { useEffect, useState } from "react";
import { getCards } from "../../features/card/Api";
import CardList from "../../features/card/components/CardListSection";

export default function CardListPage() {
  const [cards, setCards] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await getCards();
      setCards(allCards ?? []);
      setIsPending(false);
    };
    fetchCards();
  }, []);

  return <CardList cards={cards} isPending={isPending} />;
}
