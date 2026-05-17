import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardListSkeleton from "../components/skeleton/CardListSkeleton";
import CardListFallback from "./CardListFallback";
import CardList from "../components/CardList/CardList";
import styled from "@emotion/styled";

export type Card = {
  id: string;
  first: string;
  fourth: string;
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
      <HavingCard>
        보유 카드{" "}
        {state.status === "success" &&
          state.data.length > 0 &&
          `(${state.data.length})`}
      </HavingCard>
      {state.status === "loading" && <CardListSkeleton />}
      {state.status === "error" && (
        <CardListFallback type="error" onClick={handleRetry} />
      )}
      {state.status === "success" && state.data.length === 0 && (
        <CardListFallback type="success" onClick={() => navigate("/")} />
      )}
      {state.status === "success" && state.data.length > 0 && (
        <CardList cards={state.data} onDelete={fetchCards} />
      )}
    </div>
  );
}

const HavingCard = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: sans-serif;
`;
