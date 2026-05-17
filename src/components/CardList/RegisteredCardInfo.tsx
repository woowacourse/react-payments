import styled from "@emotion/styled";
import { CARD_COLORS } from "../../constants/cardConstants";
import type { Card } from "../../pages/CardListPage";
import DeleteCardButton from "./DeleteCardButton";

interface Props {
  card: Card;
  onDelete: () => void;
}

export default function RegisteredCardInfo({ card, onDelete }: Props) {
  return (
    <Container>
      <CardFirmColorBox $color={CARD_COLORS[card.cardFrimLabel] ?? "#e0e0e0"} />
      <CardInfoContainer>
        <CardFirm>{card.cardFrimLabel}</CardFirm>
        <CardNumberPreview>
          {card.first} **** **** {card.fourth}
        </CardNumberPreview>
        <CardExpPreview>
          {card.expMm} / {card.expYy}
        </CardExpPreview>
      </CardInfoContainer>
      <DeleteCardButton id={card.id} onDelete={onDelete} />
    </Container>
  );
}

const CardFirmColorBox = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  width: 64px;
  height: 40px;
  border-radius: 4px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 12px;
  gap: 12px;
`;
const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 178px;
  height: 49px;
  gap: 4px;
`;

const CardFirm = styled.p`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  margin: 2px;
`;

const CardNumberPreview = styled.p`
  font-size: 11px;
  font-family: sans-serif;
  color: #8c8c8c;
  margin: 2px;
`;

const CardExpPreview = styled.p`
  font-size: 9.5px;
  font-family: sans-serif;
  color: #8c8c8c;
  margin: 2px;
`;
