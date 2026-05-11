import styled from "@emotion/styled";
import { CardNetworkBrand } from "./CardNetworkBrand";
import { CardNumber } from "./CardNumber";
import { CardExpiryDate } from "./CardExpiryDate";
import { CARD_BRAND } from "../../Constants";
import type {
  CardNumber as CardNumberType,
  CardExpiryDate as CardExpiryDateType,
} from "../../types";

interface CardPreviewProps {
  cardNumber: CardNumberType;
  cardExpiryDate: CardExpiryDateType;
  cardBrand: string | null;
}

export function CardPreview({
  cardNumber,
  cardExpiryDate,
  cardBrand,
}: CardPreviewProps) {
  const getCardBgHex = (cardBrand: string) => {
    if (Object.keys(CARD_BRAND).includes(cardBrand)) {
      return `#${CARD_BRAND[cardBrand as keyof typeof CARD_BRAND].bgHex}`;
    }
    return "#333333";
  };
  return (
    <CardContainer cardBg={getCardBgHex(cardBrand ?? "")}>
      <div className="card-meta">
        <div className="ic-chip"></div>
        <CardNetworkBrand cardNumber={cardNumber} />
      </div>
      <div className="card-contents">
        <CardNumber cardNumber={cardNumber} />
        <CardExpiryDate cardExpiryDate={cardExpiryDate} />
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div<{ cardBg: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: ${(props) => props.cardBg};
  transition: background-color 200ms ease-out;
  padding: 0.5rem 0.75rem;
  margin: 4.625rem auto 2.75rem auto;
  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;

  .ic-chip {
    height: 22px;
    width: 36px;
    border-radius: 4px;
    background-color: #ddcd78;
  }

  .card-meta {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    top: 0;
    padding: 8px 12px;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 200px;
  }
`;
