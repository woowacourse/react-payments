import styled from "@emotion/styled";
import type { ExpiryDate } from "../../ExpiryDate";

export function CardExpiryDate({
  cardExpiryDate,
}: {
  cardExpiryDate: ExpiryDate;
}) {
  return (
    <CardExpiryDateContainer>
      <span id="preview-card-expiry-date-month">
        {cardExpiryDate.month}
      </span>
      {cardExpiryDate.month.length === 2 && (
        <span id="preview-card-expiry-date-divide-line"> / </span>
      )}
      <span id="preview-card-expiry-date-year">
        {cardExpiryDate.year}
      </span>
    </CardExpiryDateContainer>
  );
}

const CardExpiryDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  width: 100%;
  height: 1.25rem;
`;
