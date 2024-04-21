import styled from "styled-components";

const CardNumber = ({ key, number }: { key: React.Key; number: string | string[] }) => {
  return <CardNumberWrapper key={key}>{number}</CardNumberWrapper>;
};

const CardNumberWrapper = styled.span`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
`;

export default CardNumber;
