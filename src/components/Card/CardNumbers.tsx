import styled from "styled-components";
import CardNumber from "./CardNumber";

const CardNumbers = ({ cardNumbers }: { cardNumbers: string[] }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "15px",
        width: "170px",
        height: "20px",
      }}
    >
      {cardNumbers.map((cardNumber, index) => {
        if (index < 2) {
          return <CardNumber key={index} number={cardNumber} />;
        } else {
          return <CardNumber key={index} number={Array(cardNumber.length).fill(<Dot />)} />;
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
