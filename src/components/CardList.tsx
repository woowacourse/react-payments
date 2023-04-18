import styled from "styled-components";
import EmptyCard from "./common/EmptyCard";
import { CardItem } from "./CardItem";
import { Card } from "../types/card";

interface CardListProps {
  cards: Card[];
}

export const CardList = ({ cards }: CardListProps) => {
  return (
    <CardListWrapper>
      {!cards.length && <GuideText>새로운 카드를 등록해주세요.</GuideText>}
      <List>
        {cards.map((card) => (
          <CardItem card={card} />
        ))}
        <EmptyCard />
      </List>
    </CardListWrapper>
  );
};

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 33px;
`;

const GuideText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
