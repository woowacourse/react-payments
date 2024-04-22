import styled from "styled-components";

const CardNumber = ({ number }: { number: string | string[] }) => {
  return <CardNumberWrapper>{number}</CardNumberWrapper>;
};

const CardNumberWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
`;

export default CardNumber;
