import styled from "@emotion/styled";
import EmptyCardList from "./list/EmptyCardList";
import CardListPanel from "./list/CardListPanel";

export default function CardListSection({ cards }) {
  return (
    <CardListSectionContainer>
      <h1>보유 카드 {cards.length ? `(${cards.length})` : ""}</h1>
      <Content>
        {cards.length ? (
          <CardListPanel cards={cards} />
        ) : (
          <EmptyCardList />
        )}
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
