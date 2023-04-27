import { CardNameProps, CardNumberProps } from "src/interfaces";
import { CardContainer, Styled as S } from "./Card.styles";

interface Props {
  cardName?: CardNameProps;
  cardNumber: CardNumberProps;
  ownerName: string;
  expireDate: string;
  isOpen?: boolean;
  onClick?: () => void;
}

function Card({
  cardName,
  cardNumber,
  ownerName,
  expireDate,
  onClick,
  isOpen,
}: Props) {
  const CardNumbers = Object.values(cardNumber).map((value, index) => {
    if (index === 2 || index === 3) {
      return <span>{"•".repeat(value.length)}</span>;
    }
    return <span>{value}</span>;
  });

  return (
    <CardContainer
      onClick={onClick}
      cardName={cardName?.id}
      isModalOpen={isOpen}
    >
      <S.CardName>{cardName?.name}</S.CardName>
      <S.CardChip />
      <S.CardNumberContainer>{CardNumbers}</S.CardNumberContainer>
      <S.CardNameContainer>
        <span>{ownerName}</span>
        <span>{expireDate}</span>
      </S.CardNameContainer>
    </CardContainer>
  );
}

export default Card;
