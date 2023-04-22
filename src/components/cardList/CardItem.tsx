import styled from "styled-components";
import { CardType } from "../../types/card";
import Card from "../common/Card";

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
      .join("  ");
  };

  return (
    <Card backgroundColor={card.color}>
      <Container>
        <IcChip />
        <CardNumbers>{hideNumbers(card.numbers)}</CardNumbers>
        <InfoWrapper>
          <Owner>{card.owner ? card.owner : "NAME"}</Owner>
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
  justify-content: flex-end;
  width: 90%;
  height: 75%;
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
`;

const CardNumbers = styled.div`
  height: 12px;
  font-size: 12px;
  text-align: left;
  letter-spacing: 1.1px;
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
