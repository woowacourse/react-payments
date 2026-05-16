import styled from "styled-components";

import type {
  CardCompanyType,
  IssuerCodeType,
} from "../../../types/CardCompay";
import { CARD_COMPANY } from "../../../constants";

// todo: 타입 정의 상위로 올리기
export type CardItemInformation = {
  id: string;
  issuerCode: IssuerCodeType;
  number: string;
  expirationDate: string;
};

// todo: 유틸로 빼기
const getCardCompanyByCode = (code: IssuerCodeType): CardCompanyType => {
  return CARD_COMPANY[code];
};

const CardItem = (cardItemInformaiton: CardItemInformation) => {
  const { id, issuerCode, number, expirationDate } = cardItemInformaiton;
  const cardCompany = getCardCompanyByCode(issuerCode);
  return (
    <CardItemLayout>
      <CardIcon $color={cardCompany.COLOR} />
      <CardInformationBox>
        <CardCompany>{cardCompany.KOR}</CardCompany>
        <CardNumber>{number}</CardNumber>
        <ExpiryDate>유효기간 {expirationDate}</ExpiryDate>
      </CardInformationBox>
      <DeleteButton>X</DeleteButton>
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

const CardCompany = styled.span`
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
