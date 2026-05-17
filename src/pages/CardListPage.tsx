import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type Card = {
  id: string;
  first: string;
  cardFrimLabel: string;
  expMm: string;
  expYy: string;
};

type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

export default function CardListPage() {
  const [state, setState] = useState<AsyncState<Card[]>>({ status: "loading" });
  const navigate = useNavigate();

  const fetchCards = async () => {
    try {
      const res = await fetch("/cards");
      if (!res.ok) throw new Error("서버 에러");
      const data = await res.json();
      setState({ status: "success", data });
    } catch (error) {
      setState({ status: "error", error: error as Error });
    }
  };

  const handleRetry = () => {
    setState({ status: "loading" });
    fetchCards();
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <h1>
        보유 카드{" "}
        {state.status === "success" &&
          state.data.length > 0 &&
          `(${state.data.length})`}
      </h1>
      {state.status === "loading" && <CardListSkeleton />}
      {state.status === "error" && (
        <EmptyCardList type="error" onClick={handleRetry} />
      )}
      {state.status === "success" && state.data.length === 0 && (
        <EmptyCardList type="success" onClick={() => navigate("/")} />
      )}
      {state.status === "success" && state.data.length > 0 && (
        <CardList cards={state.data} onDelete={fetchCards} />
      )}
    </div>
  );
}
