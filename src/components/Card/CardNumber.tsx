import styled from "styled-components";

import { ReactElement } from "react";

const CardNumber = ({
  cardNumber,
}: {
  cardNumber: string | ReactElement[];
}) => {
  return <CardNumberWrapper>{cardNumber}</CardNumberWrapper>;
};

const CardNumberWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardNumber;
