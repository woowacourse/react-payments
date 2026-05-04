import styled from "@emotion/styled";
import type { CardNumber } from "../../types/types";

interface CardNumberProps {
  id: "cardNumber" | "expireNumber";
  cardArray: CardNumber["cardArray"];
}

export default function CardPreviewNumber({ id, cardArray }: CardNumberProps) {
  return (
    <CardNumberWrapper id={id}>
      {cardArray.map((value, index) => (
        <CardNumberParagraph key={index}>{value}</CardNumberParagraph>
      ))}
    </CardNumberWrapper>
  );
}

interface CardNumberWrapperProps {
  id: "cardNumber" | "expireNumber";
}

const CardNumberWrapper = styled.div<CardNumberWrapperProps>`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 16%;
  line-height: 20px;
  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
  gap: ${(props) => (props.id === "cardNumber" ? "10px" : "0px")};
`;

const CardNumberParagraph = styled.p`
  margin: 0;
  padding: 0;
`;
