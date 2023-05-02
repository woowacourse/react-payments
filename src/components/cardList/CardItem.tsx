import styled from "styled-components";
import { CardType } from "../../types/card";
import { Card } from "../common";

interface CardProps {
  card: CardType;
}

export const CardItem = ({ card }: CardProps) => {
  const hideNumbers = (numbers: string[]): string => {
    return numbers
      .map((number, index) => {
        if (index === 2 || index === 3) {
          return "●".repeat(number.length);
        }
        return number;
      })
      .join("   ");
  };

  return (
    <Card backgroundColor={card.color}>
      <Container>
        <Company>{card.company}</Company>
        <IcChip />
        <CardNumbers>{hideNumbers(card.numbers)}</CardNumbers>
        <InfoWrapper>
          <Owner>{card.owner}</Owner>
          <ExpiryDate>{card.expiryDate}</ExpiryDate>
        </InfoWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 90%;
  height: 75%;
  color: white;

  font-size: 10px;
  font-weight: 600;
  gap: 6px;
`;

const Company = styled.div`
  color: white;
  height: 25px;
`;

const IcChip = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;
`;

const CardNumbers = styled.div`
  height: 12px;
  font-size: 12px;
  text-align: left;
  letter-spacing: 3.2px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Owner = styled.div`
  width: 80%;
  height: 20px;
  word-wrap: break-word;
`;

const ExpiryDate = styled.div``;
