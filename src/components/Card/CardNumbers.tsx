import styled from "styled-components";
import CardNumber from "./CardNumber";
import { CardInfo } from "../PaymentApp";


const CardNumbers = ({ cardNumbers }: { cardNumbers: CardInfo[] }) => {
  const latestCardNumbers: { [key: number]: string } = {};

  cardNumbers.forEach((cardInfo) => {
    const index = Number(cardInfo.index);
    latestCardNumbers[index] = cardInfo.currentValue;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        height: "20px",
      }}
    >
      {Object.entries(latestCardNumbers).map(([index, value]) => {
        const numericIndex = Number(index);
        if (value) {
          return numericIndex <= 1 ? (
            <CardNumber key={numericIndex} number={value} />
          ) : (
            <CardNumber
              key={numericIndex}
              number={Array(value.length)
                .fill(0)
                .map(() => (
                  <Dot />
                ))}
            />
          );
        }
      })}
    </div>
  );
};

const Dot = styled.span`
  display: inline-block;
  background-color: #fff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 5px;
`;

export default CardNumbers;
