import React from "react";
import { CardIDProps, CardNumberProps, ExpireDateProps } from "src/interfaces";
import { Styled as S } from "./Card.styles";
import { BANK_LIST, NUMBERS } from "src/utils/constant";
import { getBankListName } from "src/utils";

interface Props {
  cardName?: CardIDProps;
  cardNumber: CardNumberProps;
  ownerName: string;
  expireDate: ExpireDateProps;
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
  const CardNumbers = cardNumber.map((value, index) => {
    return (
      <span>
        {index === 2 || index === 3 ? "•".repeat(value.length) : value}
      </span>
    );
  });

  const name = getBankListName(cardName ?? null);
  const expire =
    expireDate[0].length === NUMBERS.EACH_MM_YY
      ? expireDate.join("/")
      : expireDate[0];

  return (
    <S.CardContainer onClick={onClick} cardName={cardName} isModalOpen={isOpen}>
      <S.CardName>{name}</S.CardName>
      <S.CardChip />
      <S.CardNumberContainer>{CardNumbers}</S.CardNumberContainer>
      <S.CardNameContainer>
        <span>{ownerName}</span>
        <span>{expire}</span>
      </S.CardNameContainer>
    </S.CardContainer>
  );
}

export default Card;
