import styled from "@emotion/styled";
import EmptyCardList from "./list/EmptyCardList";
import CardListPanel from "./list/CardListPanel";
import CardListSkeleton from "./list/CardListSkeleton";

export type CardListStatus = "pending" | "empty" | "success" | "error";

export default function CardListSection({
  cards,
  status,
}: {
  cards: object[];
  status: CardListStatus;
}) {
  return (
    <CardListSectionContainer>
      <h1>보유 카드 {status === "success" ? `(${cards.length})` : ""}</h1>
      <Content>
        {status === "pending" && <CardListSkeleton count={cards.length} />}
        {status === "empty" && <EmptyCardList />}
        {status === "success" && <CardListPanel cards={cards} />}
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
