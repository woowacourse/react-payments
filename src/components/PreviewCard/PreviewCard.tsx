import styled from '@emotion/styled';
import getCardTypeImage from './getCardTypeImage';

type PreviewCardProps = {
  cardNumber: string[];
  expirationDate: string[];
  cardCompany: string;
};

type CardCompanyProps = Pick<PreviewCardProps, 'cardCompany'>;

const cardCompanyColors: Record<string, string> = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

const StyledPreviewCard = styled.div<CardCompanyProps>`
  width: 212px;
  height: 120px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgb(0, 0, 0, 0.25);
  background-color: ${(props) => cardCompanyColors[props.cardCompany] ?? '#333333'};
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
`;

const StyledCardNumber = styled.div`
  color: white;
  font-size: 14px;
  font-family: 'Inter';
  letter-spacing: 2.5px;
`;

const StyledExpirationDate = styled.div`
  color: white;
  font-size: 14px;
  margin: 10px 2px;
  font-family: 'Inter';
  letter-spacing: 2.5px;
`;

const PreviewCard = ({ cardNumber, expirationDate, cardCompany }: PreviewCardProps) => {
  const cardType = getCardTypeImage(cardNumber[0]);

  return (
    <StyledPreviewCard cardCompany={cardCompany}>
      <StyledCardHeader>
        <StyledICChip />
        {cardType && <StyledCardType src={cardType} />}
      </StyledCardHeader>
      <StyledCardNumberWrapper>
        {cardNumber.map((number, idx) => (
          <StyledCardNumber>{idx >= 2 ? '•'.repeat(number.length) : number}</StyledCardNumber>
        ))}
      </StyledCardNumberWrapper>

      <StyledExpirationDate>
        {expirationDate.join('/').length > 1 && expirationDate.join('/')}
      </StyledExpirationDate>
    </StyledPreviewCard>
  );
};

export default PreviewCard;
