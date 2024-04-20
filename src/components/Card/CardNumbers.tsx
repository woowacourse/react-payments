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
        .sort()
        .map(([index, value]) => {
          if (value) {
            return Number(index) <= 1 ? (
              <CardNumber cardNumber={value} />
            ) : (
              <CardNumber
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
