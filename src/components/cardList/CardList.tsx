import CardItem from "./CardItem";
import EmptyCard from "./EmptyCard";
import styled from "styled-components";

import { useContext } from "react";
import { CardsContext } from "../../contexts/CardsContext";

const CardList = () => {
  const { cards } = useContext(CardsContext);

  return (
    <CardListWrapper>
      {!cards.length && <GuideText>새로운 카드를 등록해주세요.</GuideText>}
      <List>
        {cards.map((card) => (
          <li key={card.numbers}>
            <CardItem card={card} />
            <Alias>{card.alias}</Alias>
          </li>
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
  gap: 30px;
`;

const Alias = styled.div`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 208px;

  margin: 15px auto;
  padding: 0px 10px;

  font-size: 14px;
  font-weight: 600;
  color: #525252;
`;

export default CardList;
