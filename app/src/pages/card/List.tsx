import { useEffect, useState } from "react";
import { getCards, deleteCard } from "../../features/card/Api";
import CardListSection from "../../features/card/components/CardListSection";
import type { CardListStatus } from "../../features/card/components/CardListSection";

export default function CardListPage() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState<CardListStatus>("pending");

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

  const handleDeleteCard = async (cardId: string) => {
    const result = window.confirm("카드를 제거하시겠습니까?");
    if (result) {
      await deleteCard(cardId);
      fetchCards();
    }
  };

  useEffect(function getInitialCards() {
    async function getCards() {
      fetchCards();
    }
    getCards();
  }, []);

  return (
    <CardListSection
      cards={cards}
      status={status}
      handleDeleteCard={handleDeleteCard}
    />
  );
}
