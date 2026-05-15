import styled from 'styled-components';

import type {CardResponse} from '@/domain/card/cardApi.types';
import {CARD_COMPANIES, DEFAULT_CARD_COLOR, getCompanyByIssuerCode} from '@/domain/card/cardCompany';

type CardListItemProps = {
  card: CardResponse;
};

const CardListItem = ({card}: CardListItemProps) => {
  const company = getCompanyByIssuerCode(card.issuerCode);
  const cardColor = company ? CARD_COMPANIES[company].backgroundColor : DEFAULT_CARD_COLOR;
  const companyName = company ? CARD_COMPANIES[company].name : '알 수 없는 카드';

  return (
    <Item>
      <Preview $backgroundColor={cardColor} aria-hidden='true' />
      <Info>
        <CompanyName>{companyName}</CompanyName>
        <CardNumber>{card.number}</CardNumber>
        <ExpirationDate>유효기간 {card.expirationDate}</ExpirationDate>
      </Info>
      <DeleteButton type='button' aria-label={`${companyName} 삭제`}>
        <DeleteIcon src='/images/delete_icon.svg' alt='' />
      </DeleteButton>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 10px 12px;
  gap: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const Preview = styled.div<{$backgroundColor: string}>`
  width: 64px;
  height: 40px;
  flex-shrink: 0;
  background-color: ${({$backgroundColor}) => $backgroundColor};
  border-radius: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`;

const CompanyName = styled.p`
  color: #353c49;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
`;

const CardNumber = styled.p`
  color: #8c8c8c;
  font-size: 13px;
  line-height: 1.1;
  white-space: nowrap;
`;

const ExpirationDate = styled.p`
  color: #8c8c8c;
  font-size: 12px;
  line-height: 1.1;
  white-space: nowrap;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const DeleteIcon = styled.img`
  width: 13px;
  height: 13px;
`;

export default CardListItem;
