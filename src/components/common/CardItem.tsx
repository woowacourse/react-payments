import styled from 'styled-components';
import { CardItemInfo } from '../../types/Card';

interface CardItemProps {
  card: CardItemInfo;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <CardItemContainer>
      <ICChip></ICChip>
      {card && (
        <>
          <CardNumberContainer>
            <p>{card.cardNumber[0]}</p>
            <p>{card.cardNumber[1]}</p>
            <p>{card.cardNumber[2]}</p>
            <p>{card.cardNumber[3]}</p>
          </CardNumberContainer>
          <CardInfoContainer>
            <CardNameContainer>{card.name || 'NAME'}</CardNameContainer>
            <CardExpirationContainer>{`${card.expirationDate[0] || 'MM'}/${
              card.expirationDate[1] || 'YY'
            }`}</CardExpirationContainer>
          </CardInfoContainer>
        </>
      )}
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  width: 213px;
  height: 133px;

  padding: 14px;

  box-sizing: border-box;

  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: 12px;
  font-weight: 700;

  color: #ffffff;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  margin-top: 33px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;

  margin-top: 12px;

  font-size: 14px;
  letter-spacing: 3px;

  > p {
    width: 20%;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 7px;
`;

const CardNameContainer = styled.p`
  width: 60%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardExpirationContainer = styled.p``;

export default CardItem;
