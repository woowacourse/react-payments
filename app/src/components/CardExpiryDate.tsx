import styled from "@emotion/styled";

export function CardExpiryDate({ cardExpiryDate }) {
  return (
    <CardExpiryDateContainer>
      <span>{cardExpiryDate["expiry-month"]}</span>
      {cardExpiryDate["expiry-month"].length === 2 && <>/</>}
      <span>{cardExpiryDate["expiry-year"]}</span>
    </CardExpiryDateContainer>
  );
}

const CardExpiryDateContainer = styled.div``;
