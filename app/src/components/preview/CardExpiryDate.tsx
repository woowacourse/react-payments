import styled from "@emotion/styled";
import { useCardContext } from "../../hooks/useCardContext";

export function CardExpiryDate() {
  const { cardExpiryDate } = useCardContext();
  return (
    <CardExpiryDateContainer>
      <span>{cardExpiryDate["expiry-month"]}</span>
      {cardExpiryDate["expiry-month"].length === 2 && <> / </>}
      <span>{cardExpiryDate["expiry-year"]}</span>
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
