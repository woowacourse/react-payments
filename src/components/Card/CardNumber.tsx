import styled from "styled-components";

const CardNumber = ({ number }:{number:string}) => {
  return <CardNumberWrapper>{number}</CardNumberWrapper>;
};

const CardNumberWrapper = styled.span`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardNumber;
