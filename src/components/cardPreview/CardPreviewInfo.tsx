import styled from "@emotion/styled";
import { type CardPreviewProps } from "../../types/types";
import { maskCardNumber, formatExpireDate } from "../../utils/cardFormatters";
import CardPreviewNumber from "./CardPreviewNumber";

export default function CardPreviewInfo({
  cardNumber,
  expireDate,
}: CardPreviewProps) {
  return (
    <CardImageInfoWrapper>
      <CardPreviewNumber gap="10px" cardArray={maskCardNumber(cardNumber)} />
      <CardPreviewNumber gap="0px" cardArray={formatExpireDate(expireDate)} />
    </CardImageInfoWrapper>
  );
}

const CardImageInfoWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
