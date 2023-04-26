import type { CardType } from '../../types';
import styled from 'styled-components';

import { CARD_COMPANY_COLOR_MAP } from '../../constants';

interface Props extends Pick<CardType, 'cardCompany' | 'cardNumber' | 'expireDate' | 'ownerName'> {
  onClick?: () => void;
}

const Card = ({ cardCompany, cardNumber, ownerName, expireDate, onClick }: Props) => {
  return (
    <CardWrapper onClick={onClick} cardCompany={cardCompany}>
      <CardCompany>{cardCompany}</CardCompany>
      <CardChip />
      <CardNumberArea>
        {cardNumber.map((number, index) => (
          <CardNumber>{number.length ? (index >= 2 ? '∙'.repeat(number.length) : number) : null}</CardNumber>
        ))}
      </CardNumberArea>
      <CardInfoArea>
        <OwnerName>{ownerName || 'NAME'}</OwnerName>
        <ExpireDate>{expireDate.join('') !== '' ? expireDate.join('/') : 'MM/YY'}</ExpireDate>
      </CardInfoArea>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div<{ cardCompany: string }>`
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 214px;
  min-height: 134px;
  border-radius: 5px;
  padding: 12px 18px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  background: ${({ cardCompany: key }) => (key ? CARD_COMPANY_COLOR_MAP[key].background : '#333333')};
  color: ${({ cardCompany: key }) => (key ? CARD_COMPANY_COLOR_MAP[key].color : 'white')};
`;

const CardCompany = styled.p`
  position: absolute;
  top: 14px;
  left: 16px;

  font-weight: 500;
  font-size: 12px;
`;

const CardChip = styled.div`
  position: absolute;
  top: 48px;
  left: 16px;
  background: #cbba64;
  border-radius: 4px;
  width: 40px;
  height: 26px;
`;

const CardNumberArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const CardNumber = styled.p`
  font-size: 15px;
  letter-spacing: 0.5px;
  width: 21%;
`;

const CardInfoArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 10px;

  font-size: 11px;
`;

const OwnerName = styled.p`
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ExpireDate = styled.p``;
