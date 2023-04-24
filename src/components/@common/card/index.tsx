import { CardNumberObj } from "src/interfaces";
import { Styled } from "./Card.styles";

interface Props {
  cardNumber: CardNumberObj;
  ownerName: string;
  expireDate: string;
}

function Card({ cardNumber, ownerName, expireDate }: Props) {
  const cardNumbers = Object.values(cardNumber).map((value, index) => {
    if (index === 2 || index === 3) {
      return <span>{"•".repeat(value.length)}</span>;
    }
    return <span>{value}</span>;
  });

  return (
    <Styled.CardContainer>
      <Styled.CardChip />
      <Styled.CardNumberContainer>{cardNumbers}</Styled.CardNumberContainer>
      <Styled.CardNameContainer>
        <span>{ownerName}</span>
        <span>{expireDate}</span>
      </Styled.CardNameContainer>
    </Styled.CardContainer>
  );
}

export default Card;
