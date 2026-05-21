import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardListSkeleton from "../components/skeleton/CardListSkeleton";
import EmptyCardList from "./EmptyCardList";
import CardList from "../components/CardList/CardList";
import styled from "@emotion/styled";
import { cardsApi } from "../api/cardsApi";

export type Card = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
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
      const res = await cardsApi.get();
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
    <Container>
      <HavingCard>
        보유 카드{" "}
        {state.status === "success" &&
          state.data.length > 0 &&
          `(${state.data.length})`}
      </HavingCard>
      {state.status === "loading" && <CardListSkeleton />}
      {state.status === "error" && (
        <EmptyCardList type="error" onClick={handleRetry} />
      )}
      {state.status === "success" && state.data.length === 0 && (
        <EmptyCardList type="success" onClick={() => navigate("/register")} />
      )}
      {state.status === "success" && state.data.length > 0 && (
        <CardList cards={state.data} onDelete={fetchCards} />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 700px;
  gap: 16px;
  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  padding: 40px 28px 32px 28px;
`;
const HavingCard = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: sans-serif;
  margin: 0;
`;
