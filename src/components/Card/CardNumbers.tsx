import styled from "styled-components";
import CardNumber from "./CardNumber";
import { CardInfo } from "../PaymentApp";

const CardNumbers = ({ cardNumbers }: { cardNumbers: CardInfo[] }) => {
  const latestCardNumbers = {};

  cardNumbers.forEach((cardInfo) => {
    const index = Number(cardInfo.index);
    latestCardNumbers[index] = cardInfo.currentValue;
  });

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}>
      {Object.keys(latestCardNumbers).map((index) => {
        if (latestCardNumbers[index]) {
          const numericIndex = Number(index);
          return numericIndex <= 1 ? (
            <CardNumber key={numericIndex} number={latestCardNumbers[index]} />
          ) : (
            <CardNumber
              key={numericIndex}
              number={Array(latestCardNumbers[index].length)
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
