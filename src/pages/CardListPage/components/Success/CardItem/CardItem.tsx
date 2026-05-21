import styled from "styled-components";

import { getIssuerInformationByCode } from "../../../../../domain/card/cardIssuer";
import type { CardListResponseItem } from "../../../../../domain/card/api/cards.types";

type CardItemProps = {
  cardItemInformaiton: CardListResponseItem;
  onDeleteCard: (
    cardId: string,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ) => void;
};

const CardItem = ({ cardItemInformaiton, onDeleteCard }: CardItemProps) => {
  const { id, issuerCode, number, expirationDate } = cardItemInformaiton;
  const issuer = getIssuerInformationByCode(issuerCode);

  const handleCardDeleteClick = (cardId: string) => {
    const result = window.confirm("카드를 삭제하시겠습니까?");
    if (!result) {
      return;
    }
    onDeleteCard(
      cardId,
      () => {},
      () => {
        alert("카드 삭제에 실패했습니다.");
      },
    );
  };

  if (!issuer) {
    return <div>일치하는 카드를 찾을 수 없습니다.</div>;
  }

  return (
    <CardItemLayout>
      <CardIcon $color={issuer.COLOR} />
      <CardInformationBox>
        <Issuer>{issuer.KOR}</Issuer>
        <CardNumber>{number.replace(/.{4}/g, "$& ")}</CardNumber>
        <ExpiryDate>유효기간 {expirationDate}</ExpiryDate>
      </CardInformationBox>
      <DeleteButton onClick={() => handleCardDeleteClick(id)}>X</DeleteButton>
    </CardItemLayout>
  );
};

export default CardItem;

const CardItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px 12px;
`;

const CardIcon = styled.div<{ $color: string }>`
  width: 64px;
  height: 40px;
  background-color: ${(props) => props.$color};
  border-radius: 8px;
`;

const CardInformationBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Issuer = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #353c49;
`;

const CardNumber = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

const ExpiryDate = styled.span`
  font-size: 9px;
  font-weight: 400;
  color: #8c8c8c;
`;

const DeleteButton = styled.button``;
