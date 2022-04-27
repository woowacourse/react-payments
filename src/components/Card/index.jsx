import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 133px;
  padding: 14px 14px 0;
  background-color: #d2d2d2;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const CardCompanyName = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #383838;
`;

const IC = styled.div`
  width: 40px;
  height: 26px;
  margin-top: 16px;
  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 10px;
  margin-top: 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #525252;
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #525252;
`;

function Card({ companyName, cardNumbers, ownerName, expiredDate }) {
  const { month, year } = expiredDate;

  return (
    <CardContainer>
      <CardCompanyName>{companyName}</CardCompanyName>
      <IC />
      <CardNumberContainer>
        {cardNumbers.map((cardNumber, index) => (
          <span key={cardNumber + index}>
            {index >= 2 ? '●'.repeat(cardNumber.length) : cardNumber}
          </span>
        ))}
      </CardNumberContainer>
      <CardBottomContainer>
        <span>{ownerName || 'NAME'}</span>
        <span>{month && year ? `${month}/${year}` : 'MM/YY'}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;
