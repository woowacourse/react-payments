import styled from '@emotion/styled';

type PreviewCardProps = {
  cardNumber: string[];
  expirationDate: string[];
};

const StyledPreviewCard = styled.div`
  width: 212px;
  height: 120px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgb(0, 0, 0, 0.25);
  background-color: #333333;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  margin: 30px auto;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30%;
`;

const StyledICChip = styled.div`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 3px;
  background-color: #ddcd78;
  z-index: 100;
`;

const StyledCardType = styled.img`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 3px;
  z-index: 100;
`;

const StyledCardNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  place-items: center;
`;

const StyledCardNumber = styled.div`
  color: white;
  font-size: 14px;
`;

const checkCardType = (firstCardInput: string) => {
  if (firstCardInput[0] === '4') return './Visa.png';

  const cardTypePrefix = Number(firstCardInput.slice(0, 2));
  if (cardTypePrefix >= 51 && cardTypePrefix <= 55) {
    return './Mastercard.png';
  }
  return null;
};

const StyledExpirationDate = styled.div`
  color: white;
  font-size: 14px;
  margin: 10px;
`;

const PreviewCard = ({ cardNumber, expirationDate }: PreviewCardProps) => {
  const cardType = checkCardType(cardNumber[0]);

  return (
    <StyledPreviewCard>
      <StyledCardHeader>
        <StyledICChip />
        {cardType && <StyledCardType src={cardType} />}
      </StyledCardHeader>
      <StyledCardNumberWrapper>
        {cardNumber.map((number) => (
          <StyledCardNumber>{number}</StyledCardNumber>
        ))}
      </StyledCardNumberWrapper>

      <StyledExpirationDate>
        {expirationDate.join('/').length > 1 && expirationDate.join('/')}
      </StyledExpirationDate>
    </StyledPreviewCard>
  );
};

export default PreviewCard;
