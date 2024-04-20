import styled from "styled-components";

import { ReactElement } from "react";

const CardNumber = ({ number }: { number: string | ReactElement[] }) => {
  return <CardNumberWrapper>{number}</CardNumberWrapper>;
};

const CardNumberWrapper = styled.span`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardNumber;
