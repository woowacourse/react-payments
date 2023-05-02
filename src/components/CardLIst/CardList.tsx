import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../types";
import CardPreview from "../CardPreview/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <Ul>
      {cards.map((card) => {
        const { cardName, cardCompany, cardNumber, ownerName, expirationDate } = card;
        const uuid = uuidv4();

        return (
          <Li key={uuid}>
            <CardPreview
              card={{ cardCompany, cardNumber, ownerName, expirationDate }}
              animation={{ transition: "all 0.3s ease", transform: "translate(3px, 3px)" }}
            />
            <span>{cardName}</span>
          </Li>
        );
      })}

      <AddCardButton />
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

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
`;

export default CardList;
