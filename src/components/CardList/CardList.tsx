import styled from "styled-components";
import { Card } from "../../types";
import CardPreview from "../CardPreview/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <Ul>
      <AddCardButton />
      {cards.map((card) => {
        const { cardNumber, ownerName, expirationDate, cardCompany, alias } = card;

        return (
          <FlexContainer key={crypto.randomUUID()}>
            <CardPreview card={{ cardNumber, ownerName, expirationDate, cardCompany }} />
            <CardAlias>{alias}</CardAlias>
          </FlexContainer>
        );
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;

  width: 100%;

  padding-bottom: 20px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;

const FlexContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardAlias = styled.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
`;

export default CardList;
