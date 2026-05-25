import { useEffect, useState } from "react";
import { getCards, deleteCard } from "../../features/card/Api";
import CardListSection from "../../features/card/components/CardListSection";
import { type AsyncStatus } from "../../features/common/Types";

export default function CardIndexPage() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState<AsyncStatus>("idle");

  const fetchCards = async () => {
    setStatus("loading");
    try {
      const allCards = await getCards();
      const fetched = allCards ?? [];
      setCards(fetched);
      setStatus("success");
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
