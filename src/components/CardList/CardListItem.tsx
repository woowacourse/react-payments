import type { CardListItem as CardListItemType } from "@/api/cards";
import { CARD_COMPANIES } from "@/constants/cardCompanies";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface CardListItemProps {
  card: CardListItemType;
}

const CardListItem = ({ card }: CardListItemProps) => {
  const cardCompany = CARD_COMPANIES.find(
    (company) => company.issuerCode === card.issuerCode,
  );

  return (
    <Item>
      <CardImage $backgroundColor={cardCompany?.color} />

      <CardInfo>
        <CardCompany>{cardCompany?.name}</CardCompany>
        <CardNumber>{card.number}</CardNumber>
        <CardExpirationDate>유효기간 {card.expirationDate}</CardExpirationDate>
      </CardInfo>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 4.25rem;
  padding: 0.75rem;
  border: 1px solid ${COLOR_PALETTE["GREY-200"]};
  border-radius: 0.35rem;
`;

const CardImage = styled.div<{ $backgroundColor?: string }>`
  width: 4rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? COLOR_PALETTE["BLACK-800"]};
`;

const CardInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
`;

const CardCompany = styled.strong`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

const CardNumber = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: ${COLOR_PALETTE["GREY-500"]};
`;

const CardExpirationDate = styled.span`
  font-size: 0.6rem;
  font-weight: 400;
  color: ${COLOR_PALETTE["GREY-500"]};
`;

export default CardListItem;
