import { CardNumberObj } from "src/interfaces";
import { Styled as S } from "./Card.styles";

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
    <S.CardContainer>
      <S.CardChip />
      <S.CardNumberContainer>{cardNumbers}</S.CardNumberContainer>
      <S.CardNameContainer>
        <span>{ownerName}</span>
        <span>{expireDate}</span>
      </S.CardNameContainer>
    </S.CardContainer>
  );
}

export default Card;
