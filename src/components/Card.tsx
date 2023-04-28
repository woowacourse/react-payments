import styled from "styled-components";

interface CardProps {
  cardColor: string;
  cardTitle: string;
  cardNumberSet: string[];
  owner: string;
  expiracy: string;
}

const StyledCard = styled.div<{ cardColor: string }>`
  width: 213px;
  height: 133px;
  box-shadow: 3px 3px 5px #00000040;
  background: ${(props) => props.cardColor ?? "#333"};
  border-radius: 5px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;
const StyledTitle = styled.div`
  color: rgb(255, 255, 255);
  font-size: 12px;
  height: 14px;
  margin-bottom: 82px;
`;
const StyledMagnet = styled.div`
  background: #cbba64;
  position: absolute;
  top: 60px;
  width: 40px;
  height: 26px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
const StyledCardNumber = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
const StyledCardNumberItem = styled.span`
  width: 34px;
  letter-spacing: 3px;
  &:nth-child(3) {
    font-size: 24px;
    letter-spacing: 2px;
  }
  &:last-child {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const StyledOwnerName = styled.span`
  display: inline-block;
  width: 130px;
  color: #fff;
  font-weight: bold;
  overflow-x: hidden;
  word-break: break-all;
  font-size: 14px;
`;
const StyledExpiracy = styled.span`
  color: #fff;
  float: right;
  font-weight: bold;
  font-size: 14px;
`;

const ENCRYPT_INDEX = 2;

export default function Card({
  cardColor,
  cardTitle,
  cardNumberSet,
  owner,
  expiracy,
}: CardProps) {
  return (
    <StyledCard cardColor={cardColor}>
      <StyledTitle>{cardTitle}</StyledTitle>
      <StyledMagnet />
      <div>
        <StyledCardNumber>
          {cardNumberSet.map((cardNumberItem: string, index: number) => (
            <StyledCardNumberItem key={`${index}${cardNumberItem}`}>
              {index >= ENCRYPT_INDEX
                ? "·".repeat(cardNumberItem.length)
                : cardNumberItem}
            </StyledCardNumberItem>
          ))}
        </StyledCardNumber>
        <StyledOwnerName>{owner ? owner : "NAME"}</StyledOwnerName>
        <StyledExpiracy>{expiracy}</StyledExpiracy>
      </div>
    </StyledCard>
  );
}
