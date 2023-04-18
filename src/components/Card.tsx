import styled from 'styled-components';

interface Props {
  cardNumber?: string;
  ownerName?: string;
  expireDate?: string;
}

const Card = (props: Props) => {
  const { cardNumber, ownerName, expireDate } = props;
  return (
    <CardWrapper>
      <CardChip></CardChip>
      <CardNumberArea>
        {cardNumber &&
          [cardNumber.slice(0, 4), cardNumber.slice(4, 8), '∙∙∙∙', '∙∙∙∙'].map((number) => (
            <CardNumber>{number}</CardNumber>
          ))}
      </CardNumberArea>
      <CardInfoArea>
        <OwnerName>{ownerName || 'NAME'}</OwnerName>
        <ExpireDate>{expireDate || 'MM/YY'}</ExpireDate>
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
  top: 48px;
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
`;

const CardInfoArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 10px;

  font-size: 11px;
`;

const OwnerName = styled.p``;

const ExpireDate = styled.p``;
