import { CardNumberObj } from "src/interfaces";
import { Styled as S } from "./Card.styles";

interface Props {
  cardName?: {
    id: string;
    name: string;
  };
  cardNumber: CardNumberObj;
  ownerName: string;
  expireDate: string;
  onClick?: () => void;
}

function Card({ cardName, cardNumber, ownerName, expireDate, onClick }: Props) {
  const CardNumbers = Object.values(cardNumber).map((value, index) => {
    if (index === 2 || index === 3) {
      return <span>{"•".repeat(value.length)}</span>;
    }
    return <span>{value}</span>;
  });

  return (
    <S.CardContainer onClick={onClick} className={cardName && cardName.id}>
      <S.CardName>{cardName?.name}</S.CardName>
      <S.CardChip />
      <S.CardNumberContainer>{CardNumbers}</S.CardNumberContainer>
      <S.CardNameContainer>
        <span>{ownerName}</span>
        <span>{expireDate}</span>
      </S.CardNameContainer>
    </S.CardContainer>
  );
}

export default Card;
