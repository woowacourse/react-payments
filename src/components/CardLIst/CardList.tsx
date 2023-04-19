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
      {cards.map((card) => {
        const { cardNumber, ownerName, expirationDate } = card;
        const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;
        const key = `${firstGroup}${secondGroup}${thirdGroup}${fourthGroup}`;

        return <CardPreview key={key} card={{ cardNumber, ownerName, expirationDate }} />;
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
`;

export default CardList;
