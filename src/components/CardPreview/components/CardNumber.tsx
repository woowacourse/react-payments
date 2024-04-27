import styled from "styled-components";

import CardText from "./CardText";

import { CardNumberKeys } from "../../../types/card";

interface CardNumberProps {
  value: Record<CardNumberKeys, string>;
}

const CardNumber = ({ value }: CardNumberProps) => {
  const { first, second, third, fourth } = value;

  return (
    <Container>
      <CardText text={first} type="text" />
      <CardText text={second} type="text" />
      <CardText text={third} type="password" />
      <CardText text={fourth} type="password" />
    </Container>
  );
};

export default CardNumber;

const Container = styled.div`
  width: 170px;

  display: flex;
  justify-content: space-between;
`;
