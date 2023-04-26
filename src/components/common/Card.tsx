import type { CardType } from '../../types';
import styled from 'styled-components';

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

const CardCompanyColorMap: Record<string, { background: string; color: string }> = {
  BC카드: { background: 'rgb(222, 84, 86)', color: 'white' },
  신한카드: { background: 'rgb(19, 74, 245)', color: 'white' },
  카카오뱅크: { background: 'rgb(251, 230, 77)', color: 'black' },
  현대카드: { background: 'rgb(51, 51, 51)', color: 'white' },
  우리카드: { background: 'rgb(187, 223, 245)', color: 'rgb(51, 122, 194)' },
  롯데카드: { background: 'rgb(240, 240, 240)', color: 'rgb(225, 0, 0)' },
  하나카드: { background: 'rgb(64, 146, 143)', color: 'white' },
  국민카드: { background: 'rgb(85, 79, 71)', color: 'rgb(247, 206, 71)' },
};

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

  background: ${({ cardCompany }) => (cardCompany ? CardCompanyColorMap[cardCompany].background : '#333333')};
  color: ${({ cardCompany }) => (cardCompany ? CardCompanyColorMap[cardCompany].color : 'white')};
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
