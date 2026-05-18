import styled from "@emotion/styled";
import EmptyCardList from "./list/EmptyCardList";
import CardListPanel from "./list/CardListPanel";
import CardListSkeleton from "./list/CardListSkeleton";

export default function CardListSection({ cards, isPending = false }) {
  return (
    <CardListSectionContainer>
      <h1>보유 카드 {!isPending && cards.length ? `(${cards.length})` : ""}</h1>
      <Content>
        {isPending && cards.length ? (
          <CardListSkeleton count={cards.length} />
        ) : !isPending && cards.length ? (
          <CardListPanel cards={cards} />
        ) : !isPending ? (
          <EmptyCardList />
        ) : null}
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
