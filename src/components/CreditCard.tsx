import styled from 'styled-components';

type CreditCardProps = {
  cardNumbers: string[];
  month: string;
  year: string;
  name: string;
  cardImageSrc: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CardContainer = styled.div`
  background-color: #333333;

  width: 212px;
  height: 132px;

  padding: 8px 12px;

  border-radius: 4px;
`;

const NumbersContainer = styled.div`
  display: flex;
  gap: 10px;
  min-height: 20px;
`;

const NumbersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  min-width: 32px;
`;

const Text = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;

  background-color: #fff;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardHeaderContentWrapper = styled.div`
  width: 36px;
  height: 22px;
`;

const IcChip = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 4px;

  background-color: #ddcd78;
`;

const CardBrand = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 4px;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 14px;
  margin-left: 5px;
`;

export default function CreditCard({
  cardNumbers,
  month,
  year,
  name,
  cardImageSrc,
}: CreditCardProps) {
  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <CardHeaderContentWrapper>
            <IcChip />
          </CardHeaderContentWrapper>
          <CardHeaderContentWrapper>
            {cardImageSrc ? <CardBrand src={cardImageSrc} /> : null}
          </CardHeaderContentWrapper>
        </CardHeader>
        <CardInfoWrapper>
          <NumbersContainer>
            <NumbersWrapper>
              <Text>{cardNumbers[0]}</Text>
            </NumbersWrapper>
            <NumbersWrapper>
              <Text>{cardNumbers[1]}</Text>
            </NumbersWrapper>
            <NumbersWrapper>
              {Array.from({ length: cardNumbers[2].length }).map((_, index) => (
                <Dot key={'third card section' + index} />
              ))}
            </NumbersWrapper>
            <NumbersWrapper>
              {Array.from({ length: cardNumbers[3].length }).map((_, index) => (
                <Dot key={'fourth card section' + index} />
              ))}
            </NumbersWrapper>
          </NumbersContainer>
          <Text>{month + `${month || year ? '/' : ''}` + year}</Text>
          <Text>{name}</Text>
        </CardInfoWrapper>
      </CardContainer>
    </Container>
  );
}
