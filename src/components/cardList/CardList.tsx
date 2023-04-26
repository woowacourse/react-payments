import styled from "styled-components";
import { CardItem } from "./CardItem";
import { EmptyCard } from "./EmptyCard";

import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";

export const CardList = () => {
  const { cards } = useContext(CardContext);

  return (
    <CardListWrapper>
      {!cards.length && <GuideText>새로운 카드를 등록해주세요.</GuideText>}
      <List>
        {cards.map((card) => (
          <CardItem key={card.numbers} card={card} />
        ))}
        <EmptyCard />
      </List>
    </CardListWrapper>
  );
};

const CardListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #575757;
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;
