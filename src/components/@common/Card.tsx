import styled from 'styled-components';
import refineExpirationDate from '../../utils/refineExpirationDate';
import useCardNumber from '../../hooks/useCardNumber';
import { CardCompanyKor } from '../../@types/cardCompany';

interface CardContainerProps {
  cardColor: string;
}
interface CardProps extends CardContainerProps {
  cardNumber: string[];
  ownerName: string;
  expirationDate: string[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  cardCompany: CardCompanyKor;
  cardColor: string;
}

const Card = ({
  cardNumber,
  ownerName,
  expirationDate,
  cardCompany,
  cardColor,
  onClick,
}: CardProps) => {
  const cardNumberList = useCardNumber(cardNumber);

  return (
    <CardContainer onClick={onClick} cardColor={cardColor}>
      <span>{cardCompany}</span>
      <CardChip></CardChip>
      <CardNumberContainer>
        {cardNumberList.map((numberValue, index) => (
          <span key={`card-number-${index}`}>{numberValue}</span>
        ))}
      </CardNumberContainer>
      <CardNameContainer>
        <span>{ownerName}</span>
        <span>{refineExpirationDate(expirationDate)}</span>
      </CardNameContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<CardContainerProps>`
  width: 233px;
  height: 143px;

  display: flex;
  flex-direction: column;
  row-gap: 13px;
  justify-content: flex-end;

  background: ${(props) => props.cardColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 14px;
  margin: 18px auto;

  box-sizing: border-box;
`;

const CardChip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;
const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 13px;

  color: white;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 3px;

  span {
    width: 35px;
    display: inline-block;
  }
`;

const CardNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 13px;

  color: white;
  font-weight: 600;
  font-size: 10px;
`;
