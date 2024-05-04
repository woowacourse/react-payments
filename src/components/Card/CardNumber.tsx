import styled from "styled-components";

const Styled = {
  CardNumberLayout: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.16em;
  `,
};

const CardNumber = ({ number }: { number: string | string[] }) => {
  return <Styled.CardNumberLayout>{number}</Styled.CardNumberLayout>;
};

export default CardNumber;
