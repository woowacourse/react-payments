import styled from "@emotion/styled";
import { getCardType, maskCardNumber } from "./utils/cardUtils";
import { CARD_TYPE_PATH } from "./constants";
import { CARD_BRAND_COLOR } from "../InputField/CardBrand/constants";

type CardBrand = keyof typeof CARD_TYPE_PATH;

interface CardProps {
  cardNumber: string[];
  expiration: string[];
  cardBrand: keyof typeof CARD_BRAND_COLOR | "";
}

function Card({ cardNumber, expiration, cardBrand }: CardProps) {
  const cardType = getCardType(cardNumber[0]) as CardBrand;
  const backgroundColor = cardBrand ? CARD_BRAND_COLOR[cardBrand] : "#333";

  return (
    <CardContainer cardColor={backgroundColor}>
      <CardHeader>
        <CardIC />
        {cardType !== "NONE" && <CardType src={CARD_TYPE_PATH[cardType]} />}
      </CardHeader>

      <CardInfo>
        <p>{maskCardNumber(cardNumber).join(" ")}</p>
        <p>
          {(expiration[0] !== "" || expiration[1] !== "") &&
            expiration.join("/")}
        </p>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div<{ cardColor: string }>`
  width: 212px;
  height: 132px;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${({ cardColor }) => cardColor};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const CardIC = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border-radius: 2px;
  stroke-width: 0.5px;
  stroke: rgba(221, 205, 120, 0.1);
`;

const CardType = styled.img`
  width: 36px;
  height: 22px;
`;

const CardInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  letter-spacing: 1.5px;
`;
