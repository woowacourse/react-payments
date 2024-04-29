import styled from "styled-components";
import CardNumber from "./CardNumber";

const CardNumbers = ({ cardNumbers }: { cardNumbers: Map<string, string> }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        height: "20px",
      }}
    >
      {Array.from(cardNumbers.entries())
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([index, value]) => {
          if (value) {
            return Number(index) <= 1 ? (
              <CardNumber key={index} cardNumber={value} />
            ) : (
              <CardNumber
                key={index}
                cardNumber={Array.from({ length: value.length }).map((_, i) => (
                  <Dot key={i} />
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
