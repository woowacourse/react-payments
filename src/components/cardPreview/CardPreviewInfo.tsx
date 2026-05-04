import styled from "@emotion/styled";
import { type CardPreviewProps } from "../../types/types";
import { maskCardNumber, formatExpireDate } from "../../utils/cardFormatters";
import CardPreviewNumber from "../common/CardPreviewNumber";

export default function CardPreviewInfo({
  cardNumber,
  expireDate,
}: CardPreviewProps) {
  return (
    <CardImageInfoWrapper>
      <CardPreviewNumber
        id="cardNumber"
        cardArray={maskCardNumber(cardNumber)}
      />
      <CardPreviewNumber
        id="expireNumber"
        cardArray={formatExpireDate(expireDate)}
      />
    </CardImageInfoWrapper>
  );
}

const CardImageInfoWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
