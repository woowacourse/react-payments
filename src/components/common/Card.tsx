import styled from 'styled-components';
import { CardType } from '../../types';

const Card = ({
  cardNumber,
  ownerName,
  expireDate,
}: Pick<CardType, 'cardNumber' | 'expireDate' | 'ownerName'>) => {
  return (
    <CardWrapper>
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

const CardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 214px;
  height: 134px;

  border-radius: 5px;
  padding: 12px 18px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  background: #333333;

  color: white;
`;

const CardChip = styled.div`
  position: absolute;
  left: 16px;
  top: 42px;
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
