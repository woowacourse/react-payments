import styled from "@emotion/styled";
import EmptyCardList from "./list/EmptyCardList";
import CardListPanel from "./list/CardListPanel";
import CardListSkeleton from "./list/CardListSkeleton";
import CardListError from "./list/CardListError";
import { type AsyncStatus } from "../../common/Types";
import type { Card } from "../types";

export default function CardListSection({
  cards,
  status,
  handleDeleteCard,
}: {
  cards: Card[];
  status: AsyncStatus;
  handleDeleteCard: (id: string) => void;
}) {
  return (
    <CardListSectionContainer>
      <h1>보유 카드 {status === "success" ? `(${cards.length})` : ""}</h1>
      <Content>
        {status === "loading" && <CardListSkeleton count={cards.length} />}
        {status === "success" &&
          (cards.length ? (
            <CardListPanel handleDeleteCard={handleDeleteCard} cards={cards} />
          ) : (
            <EmptyCardList />
          ))}
        {status === "error" && <CardListError></CardListError>}
      </Content>
    </CardListSectionContainer>
  );
}

const CardListSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 40px 20px;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
