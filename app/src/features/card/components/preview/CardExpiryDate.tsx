import styled from "@emotion/styled";

export function CardExpiryDate({ cardExpiryDate }) {
  return (
    <CardExpiryDateContainer>
      <span id="preview-card-expiry-date-month">
        {cardExpiryDate.expiryMonth}
      </span>
      {cardExpiryDate.expiryMonth.length === 2 && (
        <span id="preview-card-expiry-date-divide-line"> / </span>
      )}
      <span id="preview-card-expiry-date-year">
        {cardExpiryDate.expiryYear}
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
