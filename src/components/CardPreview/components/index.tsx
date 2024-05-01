import { CSSProperties } from "react";

import styled from "styled-components";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardNumber from "./CardNumber";
import ExpirationDate from "./ExpirationDate";
import CardOwner from "./CardOwner";
import CVCLine from "./CVCLine";

import { StaticPropsWithChildren } from "../../../types/components";

interface CardProps {
  cardColor: CSSProperties["color"];
}

const Card = ({ cardColor, children }: StaticPropsWithChildren<CardProps>) => {
  return <StyledCard cardColor={cardColor}>{children}</StyledCard>;
};

export default Card;

Card.CardHeader = CardHeader;

Card.CardBody = CardBody;

Card.CardNumber = CardNumber;

Card.ExpirationDate = ExpirationDate;

Card.CardOwner = CardOwner;

Card.CVCLine = CVCLine;

const StyledCard = styled.div<{ cardColor: CSSProperties["color"] }>`
  height: 132px;
  min-height: 132px;
  width: 212px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 45px;

  color: #ffffff;
  border-radius: 4px;
  background-color: ${({ cardColor }) => cardColor};
  box-shadow: 3px 3px 5px 0px #00000040;
`;
