import styled from "styled-components";
import { CardPublicInfo } from "../../types/Card";
import CardItem from "../Card/CardItem";

interface CardListProps {
  cardList: CardPublicInfo[];
}

const CardList = ({ cardList }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card) => (
        <CardItemContainer key={card.id}>
          <CardItem card={card} />
          <CardNickName>{card.nickName}</CardNickName>
        </CardItemContainer>
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-bottom: 45px;

  &:empty {
    margin-bottom: 0;
  }
`;

const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CardNickName = styled.div`
  height: 26px;

  font-weight: 700;
  font-size: 18px;
  color: #575757;
`;

export default CardList;
