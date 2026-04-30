import styled from "@emotion/styled";
import { CardNetworkBrand } from "./CardNetworkBrand";
import { CardNumber } from "./CardNumber";
import { CardExpiryDate } from "./CardExpiryDate";
import type { CardNumberType } from "../types/cardNumber.ts";
import type { CardExpiryDateType } from "../types/cardExpiryDate.ts";

export function CardPreview({
  cardNumber,
  cardExpiryDate,
}: {
  cardNumber: CardNumberType;
  cardExpiryDate: CardExpiryDateType;
}) {
  return (
    <CardContainer>
      <div className="card-meta">
        <div className="ic-chip"></div>
        <CardNetworkBrand brand="visa" />
      </div>
      <div className="card-contents">
        <CardNumber cardNumber={cardNumber} />
        <CardExpiryDate cardExpiryDate={cardExpiryDate} />
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #333333;
  padding: 0.5rem 0.75rem;
  margin: 4.625rem auto 2.75rem auto;
  color: white;

  .ic-chip {
    height: 22px;
    width: 36px;
    border-radius: 4px;
    background-color: #ddcd78;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: center;
    gap: 0.5rem;
  }
`;
