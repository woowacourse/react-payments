import styled from "styled-components";

const Styled = {
  CardNumberWrapper: styled.span`
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
  return <Styled.CardNumberWrapper>{number}</Styled.CardNumberWrapper>;
};

export default CardNumber;
