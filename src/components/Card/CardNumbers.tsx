import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  CardNumbersLayout: styled.div`
    display: flex;
    justifycontent: flex-start;
    gap: 15px;
    width: 170px;
    height: 20px;
  `,
  Dot: styled.span`
    display: inline-block;
    background-color: #fff;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 5px;
  `,
};

const CardNumbers = ({ cardNumbers }: { cardNumbers: string[] }) => {
  return (
    <Styled.CardNumbersLayout>
      <CardNumber number={cardNumbers[0]} />
      <CardNumber number={cardNumbers[1]} />
      <CardNumber number={Array(cardNumbers[2].length).fill(<Styled.Dot />)} />
      <CardNumber number={Array(cardNumbers[3].length).fill(<Styled.Dot />)} />
    </Styled.CardNumbersLayout>
  );
};

export default CardNumbers;
