import styled from "styled-components";
import { CardType } from "../types/card";
import Card from "./common/Card";

interface CardProps {
  card: CardType;
}

export const CardItem = ({ card }: CardProps) => {
  const hideNumbers = (numbers: string): string => {
    const hiddenNumbers =
      numbers.slice(0, 8) + "●".repeat(numbers.slice(8).length);
    return (hiddenNumbers.match(/\d{1,4}|●{1,4}/g) ?? []).join("   ");
  };

  return (
    <Card backgroundColor={card.color}>
      <Container>
        <IcChip />
        <CardNumbers>{hideNumbers(card.numbers)}</CardNumbers>
        <InfoWrapper>
          <Name>{card.owner ? card.owner : "NAME"}</Name>
          <ExpiryDate>
            {card.expiryDate ? card.expiryDate : "MM / YY"}
          </ExpiryDate>
        </InfoWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 95px;
  color: white;

  font-size: 10px;
  font-weight: 600;
  gap: 6px;
`;

const IcChip = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 4px;
  background-color: #cbba64;
  margin-top: 32px;
`;

const CardNumbers = styled.div`
  text-align: center;
  height: 15px;
  letter-spacing: 1px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.div``;

const ExpiryDate = styled.div``;
