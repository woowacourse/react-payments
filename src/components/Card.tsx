import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 214px;
  height: 134px;
  background: #333333;
  font-size: 16px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
`;

const ICChipTemplate = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 14px;
  top: 48px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberTemplate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardInfoTemplate = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 80px;
  width: 100%;
  padding: 0 18px;
`;

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

interface CardProps {
  cardNumber: [string, string, string, string];
  expirationDate: ExpirationDate;
  owner: string;
}

interface ExpirationDate {
  year: number;
  month: number;
}

function Card({ cardNumber, expirationDate, owner }: CardProps) {
  return (
    <CardContainer>
      <ICChipTemplate />
      <CardInfoTemplate>
        <CardNumberTemplate>
          {cardNumber.map(number => (
            <div>{number}</div>
          ))}
        </CardNumberTemplate>
        <CardDetail>
          <div>{owner}</div>
          <div>
            {String(expirationDate.month).padStart(2, '0')}/{expirationDate.year}
          </div>
        </CardDetail>
      </CardInfoTemplate>
    </CardContainer>
  );
}

export default Card;
