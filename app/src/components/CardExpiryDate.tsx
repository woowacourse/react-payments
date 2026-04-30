import styled from "@emotion/styled";

export function CardExpiryDate({ cardExpiryDate }) {
  return (
    <CardExpiryDateContainer>
      <span>{cardExpiryDate["expiry-month"]}</span>
      <span>/</span>
      <span>{cardExpiryDate["expiry-year"]}</span>
    </CardExpiryDateContainer>
  );
}

const CardExpiryDateContainer = styled.div``;
