import styled from "@emotion/styled";
// import { selectCardType } from "../../utils/selectCardType";
import CardPreviewNumber from "./CardPreviewNumber";
import { maskCardNumber } from "../../utils/cardFormatters";
import { formatExpireDate } from "../../utils/cardFormatters";
import { useCardNumberContext } from "../../context/cardNumber/CardNumberContext";
import { useExpireDateContext } from "../../context/expireDate/ExpireDateContext";
import { useCardBrandContext } from "../../context/cardBrand/CardBrandContext";

export default function CardPreview() {
  const { cardNumber, cardType } = useCardNumberContext();
  const { expireDate } = useExpireDateContext();
  const {
    selectedItem: { color },
  } = useCardBrandContext();
  // const cardType = selectCardType(cardNumber);

  return (
    <CardPreviewWrapper>
      <Card color={color}>
        <Upper>
          <IC />
          {cardType && <PayMethodImage src={cardType} alt="payment method" />}
        </Upper>

        <CardImageInfoWrapper>
          <CardPreviewNumber
            gap="10px"
            cardArray={maskCardNumber(cardNumber)}
          />
          <CardPreviewNumber
            gap="0px"
            cardArray={formatExpireDate(expireDate)}
          />
        </CardImageInfoWrapper>
      </Card>
    </CardPreviewWrapper>
  );
}

const CardPreviewWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 77px;
  margin-bottom: 40px;
`;

const Card = styled.div<{ color: string }>`
  background-color: ${(props) =>
    props.color ? `${props.color}` : "rgba(51, 51, 51, 1)"};
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 212px;
  height: 132px;
  padding: 8px 12px;
`;

const Upper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IC = styled.div`
  background-color: rgba(221, 205, 120, 1);
  border: 0.5px solid rgba(221, 205, 120, 0.1);
  border-radius: 1.5px;
  width: 26px;
  height: 22px;
`;

const PayMethodImage = styled.img`
  width: 36px;
  height: 22px;
`;

const CardImageInfoWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
