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
      <CardNumber number={cardNumbers[0]} />
      <CardNumber number={cardNumbers[1]} />
      <CardNumber number={Array(cardNumbers[2].length).fill(<Dot />)} />
      <CardNumber number={Array(cardNumbers[3].length).fill(<Dot />)} />
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
