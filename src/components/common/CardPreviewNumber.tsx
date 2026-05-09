import styled from "@emotion/styled";
import type { CardNumber } from "../../types/types";

interface CardNumberProps {
  gap: string;
  cardArray: CardNumber;
}

export default function CardPreviewNumber({ gap, cardArray }: CardNumberProps) {
  return (
    <CardNumberWrapper $gap={gap}>
      {cardArray.map((value, index) => (
        <CardNumberParagraph key={index}>{value}</CardNumberParagraph>
      ))}
    </CardNumberWrapper>
  );
}

const CardNumberWrapper = styled.div<{ $gap: string }>`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 16%;
  line-height: 20px;
  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
  gap: ${(props) => props.$gap};
`;

const CardNumberParagraph = styled.p`
  margin: 0;
  padding: 0;
`;
